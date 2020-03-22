import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/benvenker`)
      .then(response => response.data)
      .then(data => this.setState({ user: data }));
  }

  render() {
    const user = this.state.user;
    return (
      <div className="app">
        <UserCard user={user} />
      </div>
    );
  }
}

export default App;
