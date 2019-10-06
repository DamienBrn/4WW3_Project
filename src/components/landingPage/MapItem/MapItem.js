import React from 'react'
import './MapItem.css'
import map_src from '../../../assets/images/map_screen.JPG'



export default class MapItem extends React.Component{


    render(){
        return (
            <div>
                <div className="near_location_hotels">

                    <h2>Nearby Hotels</h2>
                    <div className="map">
                        <img src={map_src} />
                    </div>

                </div>
            </div>
        )
    }
}