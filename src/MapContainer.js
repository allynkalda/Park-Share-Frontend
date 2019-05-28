import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import rentparkService from './lib/rentparking-service'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectedParking: null, 
    mapData: []
  };


  componentDidMount () {
    rentparkService.getMapLocation()
      .then((data) => {
        this.setState({mapData: data})
      })
  }

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //     selectedParking: parking
  //   });

  // makeLink = () => {

  // }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    
    const { mapData } = this.state;

    const { selectedParking } = this.state;

    console.log(this.state.selectedParking);
    console.log(this.state.selectedPlace);
    console.log(this.props.google);
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >

      {
        mapData.map((parking) => (
          <Marker key={parking._id}
          position={{ lat: parking.currentLoc.coordinates[0],
                      lng: parking.currentLoc.coordinates[1]}} 
          onClick={ () => {
            this.setState({
            selectedPlace: this.props,
            activeMarker: this.marker,
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
          <a href={`findparking/${this.state.selectedParking._id}`}>
          <img className="image-map" src={this.state.selectedParking.image}></img>
          </a>
          <p>{selectedParking.location}</p>
          <p>Sharer: {selectedParking.renterName}</p>
          </div>
          </InfoWindow>
        ) : null
      }

        <Marker icon="./images/pin.png" 
                onClick={this.onMarkerClick} 
                name={'<button>Hey!</button>'} />
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