import { useState } from "react";
import "./style.css";


const UserRepositories = ({ repositories }) => {

  const [showRepos, setShowRepos] = useState(false);

  const handleButtonClick = () => {
    setShowRepos(!showRepos);
  };
  
  return (
    <div>
      
      <button onClick={handleButtonClick}>Repositorios</button>
      {showRepos && (
        <ul className="repos">
          {repositories.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserRepositories;