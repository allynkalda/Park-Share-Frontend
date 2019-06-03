import React, { Component } from 'react';
import userservice from "../../lib/user-service";
import rentpark from "../../lib/rentparking-service";
import { withAuth } from "../../lib/AuthProvider";
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
                this.props.history.push('/profile')
            })
    }

    transformDate = (date) => {
        const dateISO = new Date(date);
        const dateTransformed = dateISO.getDate() + '-' + (dateISO.getMonth()+1) + '-' + dateISO.getFullYear();
        return (dateTransformed)
   }

    render() {
        return (
            <div>
            { this.state.data && this.state.data.length > 0 ? (
                <div className="front-container">
                <h3>My Parking Spot</h3>
                <img className="image-details" alt="car" src={this.state.data[0].image}></img>
                <p>Location: {this.state.data[0].location}</p>
                <p>District: {this.state.data[0].district}</p>
                <p>Space for: {this.state.data[0].spaceFor}</p>
                <p>Description: {this.state.data[0].description}</p>
                <p>Date available: {this.transformDate(this.state.data[0].date)}</p>
                <Link to="/myparkingedit">
                <button className="generic-button">Edit</button>
                </Link>
                <button className="logout-button" onClick={this.deleteOne}>Delete</button>
                </div>
            ) : <div className="front-container">
                <h3>You have currently no parking spots to share.</h3>
                </div>
            }
            </div>
        )
    }
}

export default withAuth(MyParking);