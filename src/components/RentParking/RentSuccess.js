import React from 'react';
import { Link } from "react-router-dom";

export default function RentSuccess() {
    return (
        <div className="front-container">
            <h3 className="sad-text">Way to go!</h3>
            <img className="sad-image" src="/images/location-pin.png"></img>
            <h3>You have successfully shared your parking!</h3>
            <Link to={'/private'}>
                <button className="logout-button">
                    Back
                </button>
            </Link>
        </div>
    )
}
