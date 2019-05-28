import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import rentpark from '../lib/rentparking-service'

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
            <div>
                <h3>Message!</h3>
                <form onSubmit={this.handleFormSubmit}>
                <label>Message:</label>
                    <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    />
                <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default withAuth(MessageForm);
