import React from "react";
import "./Followers.css";

const Followers = props => {
  console.log("followers props: ", props);
  return (
    <div>
      <ul>
        {props.followers.map(follower => {
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
