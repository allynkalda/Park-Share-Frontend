import React, { Component } from 'react';
import rentpark from "./../lib/rentparking-service";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class MyParkingEdit extends Component {
    state = {
        location: "",
        district: "",
        description: "",
        spaceFor: "",
        date: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { location, district, spaceFor, date, description } = this.state;
            rentpark.editparking({ location, district, spaceFor, date, description })
                .then( () => {
                    this.setState({location: "", district: "", spaceFor: "", date: "", description: ""});
                    this.props.history.push('/myparking');
                })
                .catch( (err) => console.log(err) )
      }
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render() {

        const { location, district, spaceFor, date, description } = this.state;

        return (
            <div className="front-container">
                <div className="small-margintop">
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
                  <label>Description:</label>
                  <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  />
                  <label>Date:</label>
                  <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.handleChange}
                  />
                  <input type="submit" value="Save Changes" />
                </form>
                </div>
                <Link to={'/myparking'}>
                <button className="logout-button">
                    Back
                </button>
                </Link>
            </div>
        )
    }
}


export default withAuth(MyParkingEdit);