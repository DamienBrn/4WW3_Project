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
            <div className="services_container">
                <div>
                    <AirportShuttleIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.props.services['Airport shuttle'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.props.services['Airport shuttle'])}>Airport shuttle</h3>
                </div>

                <div>
                    <WifiIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.props.services['Wifi'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.props.services['Wifi'])}>Wifi</h3>
                </div>

                <div>
                    <FreeBreakfastIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.props.services['Breakfast'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.props.services['Breakfast'])}>Breakfast</h3>
                </div>

                <div>
                    <SmokeFreeIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.props.services['Smoke-free'])} />
                    <h3 style={this.checkIfServiceAvailable(this.props.services['Smoke-free'])}>Smoke-free</h3>
                </div>

                <div>
                    <LocalBarIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.props.services['Bar'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.props.services['Bar'])}>Bar</h3>
                </div>

                <div>
                    <DeckIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.props.services['Deck'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.props.services['Deck'])}>Deck</h3>
                </div>

                <div>
                    <RestaurantIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.props.services['Restaurant'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.props.services['Restaurant'])}>Restaurant</h3>
                </div>
                
            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            services : {}
        }
    }
    
    checkIfServiceAvailable(serviceAvailable){
        if(!serviceAvailable){
            return {color : '#c5c5c5'}
        }
    }

}