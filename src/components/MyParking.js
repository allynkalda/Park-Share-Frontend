import React, { Component } from 'react';
import userservice from "./../lib/user-service";
import rentpark from "./../lib/rentparking-service";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class MyParking extends Component {
    state = {
        data: null,
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        userservice.getuserdata()
            .then((data) => {
                this.setState({ data: data })
            })
    }

    deleteOne = () => {
        rentpark.deleteparking()
            .then(() => {
                console.log('deleted');
            })
    }

    render() {

        return (
            <div>
            { this.state.data ? (
                <div className="front-container">
                <h3>My Parking Spot</h3>
                <img className="image-details" alt="car" src={this.state.data[0].image}></img>
                <p>Location: {this.state.data[0].location}</p>
                <p>District: {this.state.data[0].district}</p>
                <p>Space for: {this.state.data[0].spaceFor}</p>
                <p>Description: {this.state.data[0].description}</p>
                <Link to="/myparkingedit">
                <button className="generic-button">Edit</button>
                </Link>
                <button className="logout-button" onclick={this.deleteOne}>Delete</button>
                </div>
            ) : null
            }
            </div>
        )
    }
}

export default withAuth(MyParking);