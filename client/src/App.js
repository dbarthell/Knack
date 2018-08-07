import React, { Component } from "react";
import KnackList from "./components/KnackList";
import Main from "./components/Main";
import Callback from "./components/Callback";
import "./components/KnackList.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardName: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.addBoardTitle = this.addBoardTitle.bind(this)
  }

  handleChange(event) {
    this.setState({ boardName: event.target.value });
  }

  addBoardTitle(e) {
    e.preventDefault();
  }

  render() {
    let mainComponent = ""
    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "callback":
        mainComponent = <Callback />
        break;
      case "knacklist":
        mainComponent = this.props.auth.isAuthenticated() ? <KnackList boardname={this.state.boardName} /> : <Main />;
        break;
      default:
        mainComponent = <Main />
        break;
    }

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">knack</a>
          <form onSubmit={this.addBoardTitle}>
            <input className="boardInput" type="text" value={this.state.boardName} onChange={this.handleChange}
              placeholder="Board name..." >
            </input>
          </form>
        </nav>
        {mainComponent}
      </div>
    );
  }
}

export default App;

