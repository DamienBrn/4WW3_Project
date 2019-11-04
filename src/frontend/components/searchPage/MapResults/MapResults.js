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
              
                {this.displayMarkers(this.props.results)}

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


    displayMarkers(resultsArray){
        let markers = resultsArray.map(item => {
            return (
                <Marker
                    key = {item._id}
                    name={item.name}
                    position={{lat: item.lat, lng: item.lng}}
                    onClick={(props, marker, e)=>this.onMarkerClick(props, marker)} 
                />
            )
        })

        return markers
    }

}

//We specify our Api key and we wrap it around our component
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapResults);