import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    username: "",
    password: "",
    image: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, firstName, lastName, email, contact, image } = this.state;
    this.props.signup({ username, password, firstName, lastName, email, contact, image });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, firstName, lastName, email, contact, image } = this.state;
    return (
      <div>
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
          <label>Contact Number:</label>
          <input
            type="text"
            name="contact"
            value={contact}
            onChange={this.handleChange}
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label>Profile Photo:</label>
          <input
            type="file"
            name="image"
            value={image}
            onChange={this.handleChange}
          />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
