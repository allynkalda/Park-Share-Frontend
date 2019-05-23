import React, { Component } from 'react'
import { Link } from "react-router-dom";

class RenderFindPark extends Component {
    
    render() {
        console.log(this.props)
        const { _id, location, renterName } = this.props.parking;
        return (
            <div key={_id}>
                <Link to={`/findparking/${_id}`}>
                    <h4>{location}</h4>
                </Link>
                    <p>{renterName}</p>
            </div>
        )
    }
}

export default RenderFindPark;