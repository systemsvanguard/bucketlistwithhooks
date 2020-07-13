// src/components/GoogleMaps.js
import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: '100%',
  height: '250px'
};

export class GoogleMaps extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        scrollwheel={false}
        draggable={true}
        style={mapStyles}
        initialCenter={{
         lat: 43.7032499,
         lng: -79.8228933
         /* near City Hall, downtown Brampton , Ontario Canada */
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Our Brampton Office"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}   

export default GoogleApiWrapper({
  apiKey: `${googleApiKey}` 
})(GoogleMaps);  
