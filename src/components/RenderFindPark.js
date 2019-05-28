import React, { Component } from 'react'
import { Link } from "react-router-dom";

class RenderFindPark extends Component {
    
    render() {
        const { _id, location, renterName, image } = this.props.parking;
        return (
            <div className="box-container" key={_id}>
                <div>
                <Link to={`/findparking/${_id}`}>
                    <img className="parking-image" src={image}></img>
                </Link>
                </div>
                <div className="text-box">
                <Link to={`/findparking/${_id}`}>
                    <h4>{location}</h4>
                </Link>
                    <p>Owner: {renterName}</p>
                </div>
            </div>
        )
    }
}

export default RenderFindPark;