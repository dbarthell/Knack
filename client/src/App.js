import React, { Component } from "react";
import "./App.css";
import KnackList from "./components/KnackList";
import Auth from "./components/Auth";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">knack</a>
        </nav>
        <KnackList />
        <Auth />
      </div>
    );
  }
}

export default App;

