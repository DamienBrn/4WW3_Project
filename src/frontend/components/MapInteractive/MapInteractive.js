import React from 'react'
import {Map,GoogleApiWrapper, Marker} from 'google-maps-react';
import {GOOGLE_MAP_API_KEY} from '../../utils/constants/constants'

/*
As I am using ReactJS, I am using the dedicated library for integrating google maps to React projects.
*/


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
//We specify our Api key and wrap it around our component.
export default GoogleApiWrapper({
    apiKey: GOOGLE_MAP_API_KEY
  })(MapInteractive);