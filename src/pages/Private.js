import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Directory from "./../components/Directory";

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <Directory />
      </div>
    );
  }
}

export default withAuth(Private);
