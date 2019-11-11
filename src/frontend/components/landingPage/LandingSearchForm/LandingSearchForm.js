import React from 'react'
import './LandingSearchForm.css'

import {
    Search as SearchIcon,
    LocationOn as LocationIcon
}from '@material-ui/icons'

import { Button, TextField } from '@material-ui/core'


export default class LandingSearchForm extends React.Component{

    render(){
        return (
            <div>
                <form id="landing_form" className="landing_form">

                    <LocationIcon className="location_icon" style={{ fontSize: 30 }}/>

                    <TextField
                        id="landing_search_property"
                        label="Destination / Property"
                        margin="normal"
                        className="small_search_input"
                    />

                    <Button title="Search" variant="contained" color="primary" className="spaced_element small_search_button">
                      <SearchIcon className="icon_left"/>
                    </Button>

                </form>
            </div>
        )
    }
}