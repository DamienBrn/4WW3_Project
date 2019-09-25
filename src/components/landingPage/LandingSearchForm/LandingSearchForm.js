import React from 'react'
import './LandingSearchForm.css'

export default class LandingSearchForm extends React.Component{

    render(){
        return (
            <div>
                <form className="landing_form">

                    <i className="fa fa-compass fa-2x"></i>
                    <input type="text" name="location" placeholder="Location"/>

                    <i className="fa fa-calendar fa-2x"></i>
                    <input type="date" name="date_from" placeholder="From"/>

                    <i className="fa fa-calendar fa-2x"></i>
                    <input type="date" name="date_to" placeholder="To"/>


                    <div id="landing_form_submit" title="search">Search</div>

                </form>
            </div>
        )
    }


    constructor(props){
        super(props)
    }

}