import React from 'react'
import './LandingSearchForm.css'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


import DateFnsUtils from '@date-io/date-fns';




export default class LandingSearchForm extends React.Component{

    render(){
        return (
            <div>
                <form className="landing_form">

                    <i className="fa fa-compass fa-2x"></i>
                    <input type="text" name="location" placeholder="Location"/>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={this.state.selectedDate}
                            onChange={()=>this.handleDateChange()}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>  


                    <div id="landing_form_submit" title="search">Search</div>

                </form>
            </div>
        )
    }


    constructor(props){
        super(props)
        this.state = {
            selectedDate : new Date('2014-08-18T21:11:54')
        }
    }


    handleDateChange(newDate){
        this.setState({
            selectedDate : newDate
        })
    }

}