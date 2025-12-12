import React, { Component } from "react";
import "./StatusComponent.css";

class StatusComponent extends Component {
  state = {
    status: "Loading...",
  };
  componentDidMount() {
    setTimeout(() => {
      const mockResponse = { status: "Active" };
      this.setState({ status: mockResponse.status });
    }, 1000);
  }

  render() {
    return (
      <div id="Tracker">
        <h1>User Status Tracker</h1>
        <h2> Status:{this.state.status} </h2>
      </div>
    );
  }
}

export default StatusComponent;