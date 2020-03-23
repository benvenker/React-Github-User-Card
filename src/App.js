import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import MaterialCard from "./components/MaterialCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/benvenker`)
      .then(response => response.data)
      .then(data => this.setState({ user: data }));

    axios
      .get(`https://api.github.com/users/benvenker/followers`)
      .then(response => response.data)
      .then(data => this.setState({ followers: data }));
  }

  render() {
    const { user, followers } = this.state;
    return (
      <div className="app">
        {/* <UserCard user={user} followers={followers} /> */}
        <MaterialCard user={user} followers={followers} />
      </div>
    );
  }
}

export default App;
