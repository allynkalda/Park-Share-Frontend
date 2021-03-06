import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import rentparkService from '../../lib/rentparking-service'
import { Redirect } from "react-router-dom";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    CurrentLocation: {},
    selectedPlace: {},
    selectedParking: null, 
    mapData: [],
    isRedirect: false,
  };

  componentDidMount () {
    rentparkService.getMapLocation()
      .then((data) => {
        this.setState({ mapData: data })
      })
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleClick = (event) => {
    console.log('hey')
    event.preventDefault();
    this.setState({
      isRedirect: true,
    })
  }

  componentDidUpdate() {
    setTimeout(() => {
      document.querySelectorAll("a[href^='#']").forEach(node => {
        console.log(node)
        node.addEventListener('click', event => {
          event.preventDefault();
          this.handleClick(event)
        });
      })
    }, 1500);
   
  }

  getCurrentLocation = (props) => {
    this.setState({
      CurrentLocation: props,
    })
  }


  render() {

    const { selectedParking, mapData , isRedirect } = this.state;

    if(selectedParking) {
      console.log('selected card')
    }
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        className="map"
        getCurrentLoc={this.getCurrentLocation}
      >
      { this.state.CurrentLocation ? (
        <Marker icon="./images/pin.png"
                position={{ lat: this.state.CurrentLocation.lat + .001,
                            lng: this.state.CurrentLocation.lng + .001}} 
              />
       ) : null
      }

      {
        mapData.map((parking) => (
          <Marker key={parking._id}
          position={{ lat: parking.currentLoc.coordinates[0],
                      lng: parking.currentLoc.coordinates[1]}} 
          onClick={ () => {
            this.setState({
            selectedPlace: this.props,

            showingInfoWindow: true,
            selectedParking: parking
            });
          }}             
          />
      ))}

      {
        this.state.selectedParking ? (
          <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          position={{ lat: selectedParking.currentLoc.coordinates[0],
                      lng: selectedParking.currentLoc.coordinates[1]}}>
          <div>
          <a href="#">
          <img className="image-map" src={selectedParking.image} alt="#" onClick={() => console.log('clicked')}></img>
          </a>
          <p className="map-text">{selectedParking.location}</p>
          <p className="map-text">Sharer: {selectedParking.renterName}</p>
          </div>
          </InfoWindow>
        ) : <InfoWindow 
          visible={false}
          >
          </InfoWindow>
      }
        {isRedirect ? <Redirect to={`findparking/${selectedParking._id}`}/> : null }
      </CurrentLocation>
    );
  }
}


  export default GoogleApiWrapper({ apiKey: 'AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU' })(MapContainer);