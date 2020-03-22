import React from "react";
import "./UserCard.css";

const UserCard = props => {
  const { user } = props;
  return (
    <div className="user-card">
      <h1 className="user-name">{user.name}</h1>
      <h3 className="company">{user.company}</h3>
      <div className="location">{user.location}</div>
      <div>
        <span>
          <span className="repos-count">{user.public_repos} </span>
          <a classname="url repos-url" href={user.repos_url}>
            Repos,
          </a>
        </span>
        <span>
          <span className="followers"> {user.followers} </span>
          <a className="url followers-url" href={user.followers_url}>
            Followers
          </a>
        </span>
      </div>
    </div>
  );
};

export default UserCard;
