import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service"

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

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)

    auth.imageUpload(uploadData)
    .then((image) => {
      this.setState({
        image,
        disable: false,
      })
    })
    .catch((error) => console.log(error))
  }

  render() {
    const { username, password, firstName, lastName, email, contact } = this.state;
    return (
      <div class="front-container">
      <div className="signup-form">
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
            onChange={this.fileOnchange}
          />
          <input type="submit" value="Signup" />
        </form>
        <p className="center">
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
      </div>
    );
  }
}

export default withAuth(Signup);
