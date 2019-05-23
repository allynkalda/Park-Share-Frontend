import React, { Component } from 'react'
import rentpark from "./../lib/rentparking-service";
import axios from 'axios'
//import { Link } from "react-router-dom";


export default class ParkingDetails extends Component {
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
        const { renterName, district, location, spaceFor, date } = this.state.data;
        return (
            <div>
                <h1>Parking Details</h1>
                <h3>Renter: {renterName} </h3>
                <p>Location: {location}</p>
                <p>District: {district}</p>
                <p>Space for: {spaceFor}</p>
                <p>Date Available: {date}</p>
            </div>
        )
    }
}
