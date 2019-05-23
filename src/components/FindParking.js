import React, { Component } from 'react'
import rentpark from "./../lib/rentparking-service";
import { Link } from "react-router-dom";

export default class FindParking extends Component {
    state = {
        listOfParking: []
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        rentpark.getparking()
            .then((data) => {
                console.log(data)
                this.setState({listOfParking: data}, )
            })
      }


    render() {
        const {listOfParking} = this.state;
        return (
            <div>
            <h1>Find Parking</h1>
            {
                listOfParking.map((parking, i) => {
                    return(
                        <div key={parking._id}>
                        <Link to={`/findparking/${parking._id}`}>
                        <h4>{parking.location}</h4>
                        </Link>
                        <p>{parking.renterName}</p>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}
