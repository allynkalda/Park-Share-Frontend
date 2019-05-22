import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import rentpark from "./../lib/rentparking-service";

class RentParking extends Component {
  state = {
    renter: "",
    location: {},
    district: "",
    image: "",
    description: "",
    spaceFor: "",
    usersInterested: "",
    date: ""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { location, district, spaceFor, date } = this.state;
        rentpark.postparkform({ location, district, spaceFor, date })
            .then( () => {
                this.setState({location: "", district: "", spaceFor: "", date: ""});
            })
            .catch( (err) => console.log(err) )
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { location, district, spaceFor, date } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={this.handleChange}
          />
          <label>District:</label>
          <input
            type="text"
            name="district"
            value={district}
            onChange={this.handleChange}
          />
          <label>Space for:</label>
          <input
            type="text"
            name="spaceFor"
            value={spaceFor}
            onChange={this.handleChange}
          />
          <label>Dates available:</label>
          <input
            type="text"
            name="date"
            value={date}
            onChange={this.handleChange}
          />
          <input type="submit" value="RentParking" />
        </form>
        <p>
          <Link to={"/private"}> Home</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(RentParking);
