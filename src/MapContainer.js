import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import rentparkService from './lib/rentparking-service'
import data from './data.json'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    CurrentLocation: {},
    selectedPlace: {},
    selectedParking: null, 
    mapData: []
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

  getCurrentLocation = (props) => {
    this.setState({
      CurrentLocation: props,
    })
  }

  render() {
    
    const { mapData } = this.state;

    const { selectedParking } = this.state;

    console.log(this.state.CurrentLocation)

    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        className="map"
        getCurrentLoc={this.getCurrentLocation}
      >
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
          <a href={`findparking/${selectedParking._id}`}>
          <img className="image-map" src={selectedParking.image}></img>
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
      { this.state.CurrentLocation ? (
        <Marker icon="./images/pin.png"
                position={{ lat: this.state.CurrentLocation.lat,
                            lng: this.state.CurrentLocation.lng}} 
              />
       ) : null
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
      </CurrentLocation>
    );
  }
}


  export default GoogleApiWrapper({ apiKey: 'AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU' })(MapContainer);