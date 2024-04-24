// UserProfile.js
import React from 'react';
import "./style.css"

const UserProfile = ({ user, title }) => {
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <div className='profile'>
          <img className='imgProfile' src={user.avatar_url} alt={user.login} />
          <div className='contentsProfile'>
            <p>Login: {user.login}</p>
            <p>Bio: {user.bio}</p>
            <p>Location: {user.location}</p>
            <p>Work: {user.company}</p>
            <p>Followers: {user.followers} Following: {user.following}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default UserProfile;