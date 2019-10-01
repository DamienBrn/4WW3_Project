import React from 'react'
import './LandingSearchForm.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button, TextField } from '@material-ui/core'


export default class LandingSearchForm extends React.Component{

    render(){
        return (
            <div>
                <form className="landing_form">

                    <TextField
                        id="outlined-name"
                        label="Destination / Property"
                        className="spaced_element small_search_input"
                        margin="normal"
                        variant="outlined"
                    />

                    <Button variant="contained" color="primary" className="spaced_element small_search_button">
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