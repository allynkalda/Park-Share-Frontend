import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Navbar extends Component {

  render() {
    const { isLoggedin } = this.props;
    return (
      <div className="navbar">
        {isLoggedin ? (
          <>
            <Link to="/private"><img className="logo-nav" src="./images/home.png" ></img></Link>
            <Link to="/findparking"><img className="big-nav" src="./images/car.png" ></img></Link>
            <Link to="/mymessages"><img className="big-nav" src="./images/message.png" ></img></Link>
            <Link to="/profile"><img className="big-nav" src="./images/user.png" ></img></Link>
          </>
        ) : ( null
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
