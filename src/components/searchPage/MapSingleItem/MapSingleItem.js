import React from 'react'
import GoogleMap, { Map,GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapSingleItem extends React.Component{
    render(){
        return(
            <div>
                <Map
                    isMarkerShown
                    google={this.props.google}
                    zoom={5}
                    initialCenter={{lat: 41.902782, lng: 12.496365}}
                    className="map"
                > 
                <Marker 
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)}
                    name={'Rome'}
                    position={{lat: 41.902782, lng: 12.496365}}
                />

                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>

                </Map>
            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            userPosition : {
                lat : 41.889980,
                lng : 12.494260
            },
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }

    onMarkerClick(props, marker, e){
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
          });
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapSingleItem);