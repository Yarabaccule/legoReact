// App.js
import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"
import SearchBar from './components/seachBar/SearchBar';
import UserProfile from './components/userProfile/UserProfile';
import UserRepositories from './components/userRepo/UserRepositories';

const App = () => {
  const [data, setData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(userResponse.data.repos_url);

      setData({
        user: userResponse.data,
        repositories: reposResponse.data,
        showRepositoriesButton: true,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserProfile user={data?.user} />
      {data?.showRepositoriesButton && (
        <>
          <hr/>
          <UserRepositories
            repositories={data?.repositories}
            loading={false}
            onToggleRepositories={() => {}}
          />
        </>
      )}
    </div>
  );
};

export default App;