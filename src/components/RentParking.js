import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import rentpark from "./../lib/rentparking-service";

class RentParking extends Component {
  state = {
    renter: "",
    location: "",
    district: "",
    image: "",
    description: "",
    spaceFor: "",
    usersInterested: "",
    date: "",
    disable: true
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { location, district, spaceFor, date, description, image } = this.state;
        rentpark.postparkform({ location, district, spaceFor, date, description, image })
            .then( () => {
                this.setState({location: "", district: "", spaceFor: "", date: "", description: "", image: ""});
                this.props.history.push('/rentparking/success');
            })
            .catch( (err) => console.log(err) )
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)

    rentpark.imageUpload(uploadData)
    .then((image) => {
      this.setState({
        image,
        disable: false,
      })
    })
    .catch((error) => console.log(error))
  }

  render() {
    const { location, district, spaceFor, date, description, disable } = this.state;
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
          <label>Dates available:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={this.handleChange}
          />
          <label>Photo:</label>
          <input
            type="file"
            onChange={this.fileOnchange}
          />
          <div className="front-container">
          <button className="generic-button" type="submit" value="Rent Parking" disabled={disable}>Rent Parking</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default withAuth(RentParking);
