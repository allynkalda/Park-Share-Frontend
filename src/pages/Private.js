import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Directory from "./../components/Directory";

class Private extends Component {
  render() {
    return (
      <div className="front-container">
        <h2>Hi {this.props.user.username}!</h2>
        <h4>What would you like to do today?</h4>
        <img src="./images/parking.png"></img>
        <Directory />
      </div>
    );
  }
}

export default withAuth(Private);
