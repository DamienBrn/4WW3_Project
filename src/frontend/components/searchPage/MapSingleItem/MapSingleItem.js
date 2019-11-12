import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import {GOOGLE_MAP_API_KEY} from '../../../utils/constants/constants'



class MapSingleItem extends React.Component {
    render() {
        return (
            <div>
                <Map
                    isMarkerShown
                    google={this.props.google}
                    zoom={5}
                    initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
                    className="map"
                >
                    <Marker
                        onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)}
                        name={this.props.name}
                        position={{ lat: this.props.lat, lng: this.props.lng }}
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

    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAP_API_KEY
})(MapSingleItem);