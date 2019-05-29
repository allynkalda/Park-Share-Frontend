import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import rentparkService from './lib/rentparking-service'
import data from './data.json'
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

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //     selectedParking: parking
  //   });

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
    console.log('update')
    document.querySelectorAll("a[href^='#']").forEach(node => {
      node.addEventListener('click', event => {
        event.preventDefault();
        this.handleClick(event)
      });
    })
  }

  getCurrentLocation = (props) => {
    this.setState({
      CurrentLocation: props,
    })
  }


  render() {

    const { selectedParking, mapData , isRedirect } = this.state;


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
                      lng: selectedParking.currentLoc.coordinates[1]}}
                      onClick={() => console.log('clicked')}>
          <div>
          <a href="#">
          <img className="image-map" src={selectedParking.image} alt="#" onClick={() => console.log('clicked')}></img>
          </a>
          <p>{selectedParking.location}</p>
          <p>Sharer: {selectedParking.renterName}</p>
          </div>
          </InfoWindow>
        ) : <InfoWindow 
          visible={false}
          >
          </InfoWindow>
      }



                
        {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
        <p>Current Location</p>
          <div dangerouslySetInnerHTML={{__html:this.state.selectedPlace.name}}>
            
          </div>
        </InfoWindow> */}
        {isRedirect ? <Redirect to={`findparking/${selectedParking._id}`}/> : null }
      </CurrentLocation>
    );
  }
}


  export default GoogleApiWrapper({ apiKey: 'AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU' })(MapContainer);