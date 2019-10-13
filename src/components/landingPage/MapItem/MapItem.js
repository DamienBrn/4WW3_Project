import React from 'react'
import './MapItem.css'
import GoogleMap, { Map,GoogleApiWrapper, Marker} from 'google-maps-react';


class MapItem extends React.Component{


    render(){
        return (
            <div>
                <div className="near_location_hotels">

                    <h2>Nearby Hotels</h2>

                    <div className="map_container">
                        <Map
                            google={this.props.google}
                            zoom={8}
                            className="map"
                            initialCenter={this.state.userPosition}
                        >

                            <Marker 
                    
                            />

                        </Map>
                    </div>

                </div>

            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            userPosition : {
                lat : 43.2634377,
                lng : -79.9289439
            }
        }
    }

    componentDidMount(){
        this.getUserLocation()
    }

    getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>this.showUserPosition(position));
        }
    }

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

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapItem);