import React from 'react'
import './MapItem.css'
import map_src from '../../../assets/images/map_screen.JPG'



export default class MapItem extends React.Component{


    render(){
        return (
            <div>
                <div className="near_location_hotels">

                    <h2>Nearby Hotels</h2>

                    <div id="user_coordinates">{this.getUserLocation()}</div>

                    <div className="map">
                        <img src={map_src} />
                    </div>

                </div>
            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            userPosition : {
                latitude : 0,
                longitude :0
            }
        }
    }

    getUserLocation() {
        let coordinatesContainer = document.getElementById('user_coordinates')

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showUserPosition);
        }else{
            coordinatesContainer.innerHTML = "Geolocalisation not supported by this browser"
        }
    }

    showUserPosition(position) {
        let coordinatesContainer = document.getElementById('user_coordinates')

        coordinatesContainer.innerHTML = `Latitude : ${position.coords.latitude} <br/> Longitude : ${position.coords.longitude}`
    }


    // showUserPositionOnMap(position) {
    //     var latlon = position.coords.latitude + "," + position.coords.longitude;
      
    //     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
      
    //     document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    //   }
}