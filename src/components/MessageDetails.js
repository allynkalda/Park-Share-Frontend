import React, { Component } from 'react';
import rentpark from "./../lib/rentparking-service";
import { Link } from "react-router-dom";

export default class MessageDetails extends Component {
    state = {
        data: [],
        users: null,
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        const { id } = this.props.match.params;
        rentpark.getmymessages(id)
          .then((data) => {
            this.setState({data: data});
          })
          .catch((err) => console.log(err));    
      }
      
    render() {
        return (
            <div className="front-container">
                <h3 className="message-space">Message Details</h3>
                <div className="read-message">
                <h4 className="message-space">{this.state.data.message}</h4>
                <p>Message from {this.state.data.senderName}<p> </p>
                <img className="message-image" src="/images/in-love.png"></img>
                </p>
                </div>
                <Link to={'/mymessages'}>
                <button className="logout-button">
                    Back
                </button>
                </Link>
            </div>
        )
    }
}
