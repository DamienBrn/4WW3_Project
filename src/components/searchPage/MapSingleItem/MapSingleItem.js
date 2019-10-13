import React from 'react'
import GoogleMap, { Map,GoogleApiWrapper, Marker} from 'google-maps-react';

class MapSingleItem extends React.Component{
    render(){
        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    className="map"
                    initialCenter={this.state.userPosition}
                > 
                <Marker/>
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
            }
        }
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzIYx2VVzDdL7GWsKkYupI6QDs1GB3WGA'
  })(MapSingleItem);