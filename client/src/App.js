import React, { Component } from "react";
import "./App.css";
import KnackList from "./components/KnackList";
import Main from "./components/Main";
import Callback from "./components/Callback";

class App extends Component {
  render() {
    let mainComponent = ""
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "callback":
        mainComponent = <Callback />;
        break;
      case "knacklist":
        mainComponent = this.props.auth.isAuthenticated() ? <KnackList /> : <Main />;
        break;
      default:
        mainComponent = <Main />;
        break;
    }

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">knack</a>
        </nav>
        {mainComponent}
      </div>
    );
  }
}

export default App;

