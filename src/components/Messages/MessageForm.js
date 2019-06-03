import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import rentpark from '../../lib/rentparking-service';
import { Link } from "react-router-dom";

class MessageForm extends Component {
    state = {
        message: '',
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { message } = this.state;
        const { id } = this.props.match.params;
        const senderName = this.props.user.username;
        
        rentpark.postmessageform({ message, id, senderName })
        .then( ({ message, id, sender }) => {
            this.setState({ message: '' });
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
    render() {

        const { message } = this.state;
        return (
            <div className="front-container">
                <div className="message-box"></div>
                <form onSubmit={this.handleFormSubmit}>
                <label>Message:</label>
                    <div>
                    <textarea rows = "10" cols = "36"
                    type="text"
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    />
                    </div>
                <input type="submit" value="Send" />
                </form>
                <Link to={'/findparking'}>
                <button className="logout-button">
                    Back
                </button>
                </Link>
            </div>
        )
    }
}

export default withAuth(MessageForm);
