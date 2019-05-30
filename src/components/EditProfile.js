import React, { Component } from 'react';
import userservice from "./../lib/user-service";
import { Link } from "react-router-dom";

export default class EditProfile extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        contact: null
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, contact } = this.state;
            userservice.edituser({ firstName, lastName, email, contact })
                .then( () => {
                    this.setState({firstName: "",
                    lastName: "",
                    email: "",
                    contact: null});
                    this.props.history.push('/profile');
                })
                .catch( (err) => console.log(err) )
      }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render() {
        const { firstName, lastName, email, contact } = this.state;
        return (
            <div className="front-container">
                <div className="big-margintop"></div>
                <form onSubmit={this.handleFormSubmit}>
                  <label>First Name:</label>
                  <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  />
                  <label>Last Name:</label>
                  <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  />
                  <label>Email:</label>
                  <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  />
                  <label>Contact:</label>
                  <input
                  type="text"
                  name="contact"
                  value={contact}
                  onChange={this.handleChange}
                  />
                  <input type="submit" value="Save Changes" />
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
