import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Directory extends Component {
    render() {
        const { logout } = this.props;
    return (
        <div className="front-container">
            <Link to={'/findparking'}>
                <button className="generic-button">Find Parking</button>
            </Link>
            <Link to={'/rentparking'}>
                <button className="generic-button">Rent Parking</button>
            </Link>
            <button className="logout-button" onClick={logout}>Logout</button>
        </div>
        )
    }
}

export default withAuth(Directory);