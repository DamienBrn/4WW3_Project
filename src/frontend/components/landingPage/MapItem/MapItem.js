import React from 'react'
import './MapItem.css'
import { Map,GoogleApiWrapper, Marker} from 'google-maps-react';


class MapItem extends React.Component{

    render(){
        return (
                <div className="near_location_hotels">

                    <h2>Nearby Hotels</h2>

                    <div className="map_container">
                        <Map
                            isMarkerShown
                            google={this.props.google}
                            zoom={8}
                            className="map"
                            center={this.state.userPosition}
                        >
                             <Marker 
                                position={{
                                        lat :this.state.userPosition.lat,
                                        lng : this.state.userPosition.lng
                                    }}
                            />
                        </Map>
                    </div>
                </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            userPosition : {
                lat : 0,
                lng : 0
            }
        }
    }

    //We get the user's location when the landing page is loaded
    componentDidMount(){
        this.getUserLocation()
    }

    //We get the current posistion of the user
    getUserLocation() {
        if (navigator.geolocation) {
            //if successful, we call the callback "showUserPosition"
            navigator.geolocation.getCurrentPosition((position)=>this.showUserPosition(position));
        }
    }

    //We update the state with the new values
    showUserPosition(position){
        this.setState({
            ...this.state,
            userPosition : {
                ...this.userPosition,
                lat : position.coords.latitude,
                lng : position.coords.longitude
            }
        })
    }
}

//We specify our Api key and wrap it around our component
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapItem);