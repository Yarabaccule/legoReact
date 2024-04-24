// SearchBar.js
import { useState } from 'react';
import "./style.css"

const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}[a-z\d]$/i;

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    if (regex.test(username)) {
      event.preventDefault();
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='handleSubmit'
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;