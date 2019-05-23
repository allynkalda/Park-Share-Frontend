import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
//import rentpark from "./../lib/rentparking-service";
import axios from 'axios'
import { Link } from "react-router-dom";


class ParkingDetails extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        const { id } = this.props.match.params;
        console.log(this.props.match.params)
        axios.get(`http://localhost:5000/findparking/${id}`)
          .then( (apiResponse) =>{
            const data = apiResponse.data;
            this.setState({data: data});
            console.log(this.state.data)
          })

          .catch((err) => console.log(err));
      }
    render() {
        const { renterName, district, location, spaceFor, date, description, renter } = this.state.data;
        return (
            <div>
                <h1>Parking Details</h1>
                <h3>Renter: {renterName} </h3>
                <p>Location: {location}</p>
                <p>District: {district}</p>
                <p>Space for: {spaceFor}</p>
                <p>Description: {description}</p>
                <p>Date Available: {date}</p>
                <Link to={`/message/${renter}`}>
                    Message {renterName}
                </Link>
            </div>
        )
    }
}

export default withAuth(ParkingDetails);