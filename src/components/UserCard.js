import React from "react";
import "./UserCard.css";
import Followers from "./Followers";

const UserCard = props => {
  const { user, followers } = props;
  return (
    <div className="user-card">
      <h1 className="user-name">
        <a href={user.html_url}>{user.name}</a>
      </h1>
      <div>
        <h3 className="company">{user.company}</h3>
        <div className="location">{user.location}</div>
      </div>
      <div className="counts">
        <span>
          <span className="count repos-count">{user.public_repos} </span>
          <a className="url repos-url" href={user.repos_url}>
            Repos,
          </a>
        </span>
        <span>
          <span className="count followers"> {user.followers} </span>
          <a className="url followers-url" href={user.followers_url}>
            Followers
          </a>
        </span>
      </div>
      <div className="followers">
        <Followers followers={followers} />
      </div>
    </div>
  );
};

export default UserCard;
