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
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker)}
                    name={'L\'Hotel Rome'}
                    position={{lat: 41.902782, lng: 12.496365}}
                />

                <Marker
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker)}
                    name={'Holliday Inn Barcelona'}
                    position={{lat: 41.385063, lng: 2.173404}} 
                />

                <Marker
                    name={'10X Hotel Houston'}
                    position={{lat: 29.760427, lng: -95.369804}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker)} 
                />
                <Marker
                    name={'Lafayette Paris'}
                    position={{lat: 48.856613, lng: 2.352222}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker)} 
                />
                <Marker
                    name={'Four Seasons Geneva'}
                    position={{lat: 46.204391, lng: 6.143158}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker)} 
                />
                <Marker
                    name={'Porto Bay Lisbon'}
                    position={{lat: 38.722252, lng: -9.139337}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker)} 
                />

                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                    <div>
                        <h3  onClick={()=>this.test()}>{this.state.selectedPlace.name}</h3>
                        <div className="see_details">
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

    onMarkerClick(props, marker){
        
        //When we click on a marker we open the infoWindow
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
          });

          setTimeout(()=>{ //We set a timeout to 0 so the div has the time to appear and then we can get it and add a listener.
            //When a setTimeOut is set to 0, we still delay the execution of the wrapped code because it puts the wrapped code into the api and the queue handled by the browser
            let linkDetails = document.getElementsByClassName('see_details')[0]
            linkDetails.addEventListener("click", ()=>{
              this.props.showDetails()
            });
          }, 0)
    }
}

//We specify our Api key and we wrap it around our component
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapResults);