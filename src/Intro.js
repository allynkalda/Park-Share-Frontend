import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Intro extends Component {
    render() {
        return (
            <div>
                <div className="front-container">
                <img className="logo" src="./images/parking-icon.png" ></img>
                <Link to="/login"><button className="generic-button">Login</button></Link>
                <Link to="/signup"><button className="generic-button">Signup</button></Link> 
                </div>
            </div>
        )
    }
}

export default Intro;
