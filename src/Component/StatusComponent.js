import React, { Component } from "react";

class StatusComponent extends Component {
  state = {
    status: "Loading...",
  };
  componentDidMount() {
    setTimeout(() => {
      const mockResponse = { status: "Active" };
      this.setState({ status: mockResponse.status });
    }, 1500);
  }

  render() {
    return (
      <div>
        <h1>User Status Tracker</h1>
        <h2> Status:{this.state.status} </h2>

      </div>
    );
  }
}

export default StatusComponent;