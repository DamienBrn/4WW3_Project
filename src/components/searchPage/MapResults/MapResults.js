import React from 'react'
import './MapResults.css'
import { Map,GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapResults extends React.Component{
    render(){
        return(
            <div>



                <Map
                    isMarkerShown
                    google={this.props.google}
                    zoom={1}
                    initialCenter={{lat: 48.856613, lng: 2.352222}}
                    className="map"
                > 
                <Marker 
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)}
                    name={'L\'Hotel Rome'}
                    position={{lat: 41.902782, lng: 12.496365}}
                />

                <Marker
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)}
                    name={'Holliday Inn Barcelona'}
                    position={{lat: 41.385063, lng: 2.173404}} 
                />

                <Marker
                    name={'10X Hotel Houston'}
                    position={{lat: 29.760427, lng: -95.369804}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)} 
                />
                <Marker
                    name={'Lafayette Paris'}
                    position={{lat: 48.856613, lng: 2.352222}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)} 
                />
                <Marker
                    name={'Four Seasons Geneva'}
                    position={{lat: 46.204391, lng: 6.143158}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)} 
                />
                <Marker
                    name={'Porto Bay Lisbon'}
                    position={{lat: 38.722252, lng: -9.139337}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker, e)} 
                />

                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                    <div>
                        <h3  onClick={()=>this.test()}>{this.state.selectedPlace.name}</h3>
                        <div className="see_details" onClick={()=>this.test()}>
                            See details
                        </div>
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

    test(){
        console.log('ilo')
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapResults);