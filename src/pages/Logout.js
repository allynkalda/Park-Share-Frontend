import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Logout extends Component {
    render() {
        return (
            <div className="front-container">
                <h3 className="sad-text">We're sad to see you go!</h3>
                <img className="sad-image" src="./images/sad.png"></img>
                <Link to="/login"><button className="generic-button">Login</button></Link>
            </div>
        )
    }
}
