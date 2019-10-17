import React from 'react'
import {Map,GoogleApiWrapper, Marker} from 'google-maps-react';

class MapInteractive extends React.Component{
    render(){
        return(
            <div>
                <Map
                    isMarkerShown
                    google={this.props.google}
                    zoom={5}
                    initialCenter={{lat: 41.902782, lng: 12.496365}}
                    className="map"
                    center={this.props.selectedPosition}
                    onClick={(t, map, c) => this.props.handleClickOnMap(c.latLng, map)}
                > 
                    <Marker position={this.props.selectedPosition} />
                </Map>
            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            selectedPosition : {
                lat : 0,
                lng : 0
            },
        }
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapInteractive);