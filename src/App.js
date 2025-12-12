import React, { Component } from "react";
import './App.css';
import StatusComponent from './Component/StatusComponent';
import UserLogger from "./Component/UserLogger";
import HooksDemo from "./Component/HookDemo";

class App extends Component {
  render() {
    return (
      <>
        <StatusComponent />
        <UserLogger />
        <HooksDemo />
      </>
    );
  }
}

export default App;
