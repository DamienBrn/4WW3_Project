import React from 'react'
import './Services.css'

import {
    AirportShuttle as AirportShuttleIcon,
    Wifi as WifiIcon,
    FreeBreakfast as FreeBreakfastIcon,
    SmokeFree as SmokeFreeIcon,
    LocalBar as LocalBarIcon,
    Deck as DeckIcon,
    Restaurant as RestaurantIcon

}from '@material-ui/icons/';



export default class Services extends React.Component{
    render(){
        return(
            <div className="services_sample">
                <div>
                    <AirportShuttleIcon className="services_icon_size"/>
                    <h3>Airport shuttle</h3>
                </div>

                <div>
                    <WifiIcon className="services_icon_size"/>
                    <h3>Wifi</h3>
                </div>

                <div>
                    <FreeBreakfastIcon className="services_icon_size"/>
                    <h3>Breakfast</h3>
                </div>

                <div>
                    <SmokeFreeIcon className="services_icon_size"/>
                    <h3>Smoke-free</h3>
                </div>

                <div>
                    <LocalBarIcon className="services_icon_size"/>
                    <h3>Bar</h3>
                </div>

                <div>
                    <DeckIcon className="services_icon_size"/>
                    <h3>Deck</h3>
                </div>

                <div>
                    <RestaurantIcon className="services_icon_size"/>
                    <h3>Restaurant</h3>
                </div>
                
                
                
                
                
            </div>
        )
    }


    
}