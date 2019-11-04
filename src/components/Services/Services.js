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
                    <AirportShuttleIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.state.services['Airport shuttle'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.state.services['Airport shuttle'])}>Airport shuttle</h3>
                </div>

                <div>
                    <WifiIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.state.services['Wifi'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.state.services['Wifi'])}>Wifi</h3>
                </div>

                <div>
                    <FreeBreakfastIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.state.services['Breakfast'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.state.services['Breakfast'])}>Breakfast</h3>
                </div>

                <div>
                    <SmokeFreeIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.state.services['Smoke-free'])} />
                    <h3 style={this.checkIfServiceAvailable(this.state.services['Smoke-free'])}>Smoke-free</h3>
                </div>

                <div>
                    <LocalBarIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.state.services['Bar'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.state.services['Bar'])}>Bar</h3>
                </div>

                <div>
                    <DeckIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.state.services['Deck'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.state.services['Deck'])}>Deck</h3>
                </div>

                <div>
                    <RestaurantIcon className="services_icon_size" style={this.checkIfServiceAvailable(this.state.services['Restaurant'])}/>
                    <h3 style={this.checkIfServiceAvailable(this.state.services['Restaurant'])}>Restaurant</h3>
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
    

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                ...this.state,
                services : this.props.services
            })
        }, 0)
    }


    checkIfServiceAvailable(serviceAvailable){
        if(!serviceAvailable){
            return {color : '#c5c5c5'}
        }
    }

}