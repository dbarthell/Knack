import React, { Component } from "react";
import "./App.css";
import KnackList from "./components/KnackList";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Knack</a>
        </nav>
        <KnackList />
      </div>
    );
  }
}

export default App;

