import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/avatars/avatar-9.jpg';


const GithubProfileDetails = (data) => {
  const [refresh, setRefresh] = useState(false)
  const userData = data.data;
  // console.log(userData);
	// const avatarUrl = userData.avatar_url || Avatar;
	const avatarUrl =  Avatar;
  
  return (
    <section className="github__profile-container">
      <div className="github__profile-card">
       <img className="github__profile-image" src={avatarUrl} alt={`${userData.login}'s avatar`} title={`${userData.login}'s avatar`} />

        <div className="github__profile-details">
          <p>Name: {userData.name}</p>
          <p>Username: {userData.login}</p>
          <p>Email: {userData.email}</p>
          <p>Location: {userData.location}</p>
          <p>Public Repositories: <Link to={`${userData.html_url}?tab=repositories`} target="_blank">{userData.public_repos} Repos</Link></p>
          <p>Followers: <Link to={`/github-followers/${userData.login}`} target="_blank">{userData.followers} Followers</Link></p>
          <p>Following: {userData.following} Following</p>
          <p>Profile: <Link to={userData.html_url} target="_blank">{userData.html_url}</Link></p>
          <p>Company: {userData.company}</p>
          <p><small>Bio: {userData.bio}</small></p>

        </div>
      </div>
    </section>
  )
}

export default GithubProfileDetails
