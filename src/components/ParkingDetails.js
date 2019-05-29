import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import rentpark from "./../lib/rentparking-service";

class ParkingDetails extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        //  fetch the data from API after initial render
        const { id } = this.props.match.params;
        rentpark.getparkingdetails(id)
          .then( (data) =>{
            this.setState({data: data});
            console.log(data)
          })
          .catch((err) => console.log(err));
      }

    render() {
        const { renterName, image, district, location, spaceFor, date, description, renter } = this.state.data;
        return (
            <div className="front-container">
                <img className="image-details" src={image}></img>
                <h3>Parking Sharer: {renterName} </h3>
                <p>Location: {location}</p>
                <p>District: {district}</p>
                <p>Space for: {spaceFor}</p>
                <p>Description: {description}</p>
                <p>Date Available: {date}</p>
                <Link to={`/message/${renter}`}>
                <button className="generic-button">
                    Message {renterName}
                </button>
                </Link>
                <Link to={'/findparking'}>
                <button className="logout-button">
                    Back
                </button>
                </Link>
            </div>
        )
    }
}

export default withAuth(ParkingDetails);