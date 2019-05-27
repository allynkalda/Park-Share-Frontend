import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Directory extends Component {
    render() {
    return (
        <div className="front-container">
            <Link to={'/findparking'}>
                <button className="generic-button">Find Parking</button>
            </Link>
            <Link to={'/rentparking'}>
                <button className="generic-button">Rent Parking</button>
            </Link>
        </div>
        )
    }
}

export default Directory;