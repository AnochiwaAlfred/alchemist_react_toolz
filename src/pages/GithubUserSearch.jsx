import React, {useState, useEffect} from 'react';
import { FaGithub } from 'react-icons/fa';
import { Octokit } from "@octokit/core";
import GithubProfileDetails from '../components/GithubProfileDetails';

// require('dotenv').config();


const GithubUserSearch = () => {
  // const [refresh, setRefresh] = useState(false)
  const [username, setUsername] = useState(''); // Store user input
  const [status, setStatus] = useState(false); // Store user input
  const [userData, setUserData] = useState(null); // State for fetched data
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error   

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    // Clear data and error states when user input changes
    if (username) {
      setUserData(null);
      setError(null);
    }
  }, [username]);



  async function getProfileDetails(){
    const username = document.getElementById("username").value
    const octokit = new Octokit({ auth: 'git_personalized_token' });
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear previous errors

    try {
      const response = await octokit.request('GET /users/{username}', {
        username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      const data = response.data;
      // console.log(data);
      setUserData(data);
      setStatus(true);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('User not found:', username);
        setUserData(null); // Clear previous data if user is not found
        setStatus(false);
        setError('User not found!');
        // Handle the case where the user doesn't exist (e.g., display an error message)
      } else {
        console.error('Error fetching user profile:', error);
        setUserData(null); // Clear previous data in case of other errors
        setStatus(false)
        setError('An error occurred while fetching data.');
        // Handle other potential errors
      } 
    }finally {
        setIsLoading(false); // Set loading state to false after fetching/error
    }
  };

  return (
    <div className="container">
      <section className=' github__search__container'>
        <h1 className='github__search__header center'>Github User Search <FaGithub className="footer__icon"/></h1>
        <form action="" className='list__form'>
          <input type="search" name="username" className='text-input' id="username" placeholder='Username or Email' />
          <input type="button" value="Search" className='btn btn2 ' id='searchButton' onClick={getProfileDetails}/>
        </form>
      </section>

      {isLoading && <p>Loading user data...</p>}
      {error && <h3 className="center">{error}</h3>}
      {userData && <GithubProfileDetails data={userData} />}

    </div>
  )
}

export default GithubUserSearch
