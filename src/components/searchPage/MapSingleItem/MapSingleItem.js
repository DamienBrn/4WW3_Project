import React from 'react'
import { Map,GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapSingleItem extends React.Component{
    render(){
        return(
            <div>
                <Map
                    isMarkerShown
                    google={this.props.google}
                    zoom={5}
                    initialCenter={{lat: this.state.lat, lng: this.state.lng}}
                    className="map"
                > 
                <Marker 
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)}
                    name={'Rome'}
                    position={{lat: this.state.lat, lng: this.state.lng}}
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
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            lat : 0,
            lng : 0
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                ...this.state,
                lat : this.props.lat,
                lng : this.props.lng
            })
        }, 0)
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