import React from "react";
import "./Followers.css";

const Followers = props => {
  const { followers } = props;
  return (
    <div>
      <ul>
        {followers.map(follower => {
          return (
            <li>
              <a href={follower.html_url}>{follower.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Followers;
