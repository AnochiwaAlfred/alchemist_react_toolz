import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Octokit } from "@octokit/core";
import GithubProfileDetails from '../components/GithubProfileDetails';

const GithubFollowers = () => {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [followerData, setFollowerData] = useState([]); // Store list of followers
  const [followerDataMain, setFollowerDataMain] = useState([]); // Store detailed profile data

  // Function to get followers URL
  async function getFollowersUrl() {
    const octokit = new Octokit({ auth: 'git_personalized_token' });
    try {
      const response = await octokit.request('GET /users/{username}', {
        username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      const followersUrl = response.data.followers_url;
      return followersUrl;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null; // Return null if there's an error
    }
  }

  // Function to get individual follower profile details
  async function getProfileDetails(login) {
    const octokit = new Octokit({ auth: 'git_personalized_token' });
    try {
      const response = await octokit.request('GET /users/{username}', {
        username: login,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching profile details for:', login, error);
      return null; // Return null if profile fetch fails
    }
  }

  // Function to fetch followers and their details
  async function fetchGithubUsers() {
    setIsLoading(true);
    const followersUrl = await getFollowersUrl();
    if (!followersUrl) {
      setError('Unable to find followers URL.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(followersUrl);
      if (!response.ok) {
        throw new Error(`Error fetching followers: ${response.statusText}`);
      }
      const followerData = await response.json();
      setFollowerData(followerData); // Store the follower list
      
      // Fetch profile details for each follower in parallel
      const profiles = await Promise.all(
        followerData.map(follower => getProfileDetails(follower.login))
      );

      // Filter out null results (failed profile fetches) and update state
      const validProfiles = profiles.filter(profile => profile !== null);
      setFollowerDataMain(validProfiles); // Update the detailed profiles list
      setIsLoading(false);
    } catch (error) {
      setError('There was a problem with the fetch operation');
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUsers(); // Fetch data when the component mounts or when the username changes
  }, [username]); // Trigger fetch when username changes


  function setEqualHeightCards() {
  const cards = document.querySelectorAll('.github__profile-container');
  let maxHeight = 0;

  // Find the max height of all cards
  cards.forEach(card => {
    const cardHeight = card.offsetHeight;
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });

  // Set all cards to the max height
  cards.forEach(card => {
    card.style.height = `${maxHeight}px`;
  });
}

// Call this function after your cards have loaded or when dynamic data changes
setEqualHeightCards();

  return (
    <div className="container">
      <section className="github__search__container">
        <h1 className="github__search__header center">Github Followers <FaGithub className="footer__icon" /></h1>
      </section>

      {isLoading && <p>Loading followers...</p>}
      {error && <p className="error-message">{error}</p>}

      {followerDataMain.length > 0 ? (
        <ul className="followers-list">
          {followerDataMain.map((follower) => (
            <li key={follower.id}>
              <GithubProfileDetails data={follower} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No followers found for this user.</p>
      )}
    </div>
  );
};

export default GithubFollowers;
