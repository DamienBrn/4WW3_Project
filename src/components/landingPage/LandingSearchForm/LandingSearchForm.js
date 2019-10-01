import React from 'react'
import './LandingSearchForm.css'
import SearchIcon from '@material-ui/icons/Search';
import LocationIcon from '@material-ui/icons/LocationOn';
import { Button, TextField } from '@material-ui/core'


export default class LandingSearchForm extends React.Component{

    render(){
        return (
            <div>
                <form className="landing_form">

                    <LocationIcon className="location_icon" style={{ fontSize: 30 }}/>

                    <TextField
                            id="standard-name"
                            label="Destination / Property"
                            margin="normal"
                            className="small_search_input"
                        />

                    <Button title="Search" variant="contained" color="primary" className="spaced_element small_search_button">
                      <SearchIcon className="search_icon"/>
                    </Button>

                </form>
            </div>
        )
    }


    constructor(props){
        super(props)
    }
}