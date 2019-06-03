import React from 'react';
import ReactDOM from 'react-dom';
import rentpark from '../../lib/rentparking-service';
import { withRouter } from 'react-router';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100vw',
    height: '80vh',
    margin: '0 auto',
  }
};

class CurrentLocation extends React.Component {
    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
      }

    componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
    }

    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
    
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
        }
      }
    
    componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          },()=>{this.props.getCurrentLoc(this.state.currentLocation); this.loadMap();});
        });
      }
    }
    
    }

    loadMap() {
        if (this.props && this.props.google) {
          // checks if google is available
          const { google } = this.props;
          const maps = google.maps;
    
          const mapRef = this.refs.map;
    
          // reference to the actual DOM element
          const node = ReactDOM.findDOMNode(mapRef);
    
          let { zoom } = this.props;
          const { lat, lng } = this.state.currentLocation;
          const center = new maps.LatLng(lat, lng);
          const mapConfig = Object.assign(
            {},
            {
              center: center,
              zoom: zoom
            }
          );
    
          // maps.Map() is constructor that instantiates the map
          this.map = new maps.Map(node, mapConfig);
        }
      }

    renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
    }

    handleSubmit = (event) => {
      
      const current = this.state.currentLocation;
      const info = [];
       info.push(current.lat);
       info.push(current.lng);

        rentpark.postparkmap({info})
          .then( (data)=> console.log(data))
            this.props.history.push('/rentparking')      
    } 

    goToFindParking = (e) => {
      e.preventDefault();
      this.props.history.push(`/findparking`)
    }

    render() {
        const style = Object.assign({}, mapStyles.map);
        console.log(this.state.currentLocation)
       return (
         <div>
            <div className="buttons-div">
              <button className="shareparking-button" onClick={this.handleSubmit}>Share this parking</button>
              <button className="buttons-map" onClick={this.goToFindParking}>See parkings spots</button>
            </div>
           <div style={style} ref="map">
             Loading map...
           </div>
           {this.renderChildren()}
         </div>
       );
    }
   

}
export default withRouter(CurrentLocation);

CurrentLocation.defaultProps = {
  zoom: 13,
  initialCenter: {
    lat: 41.3851,
    lng: 2.1734
  },
  centerAroundCurrentLocation: false,
  visible: true
};