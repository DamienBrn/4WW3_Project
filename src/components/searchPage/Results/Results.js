import React from 'react'
import './Results.css'

import {  
    Select, 
    InputLabel, 
    FormControl, 
    MenuItem, 
  } from '@material-ui/core'

import { NavLink } from 'react-router-dom'

import HotelItem from '../../HotelItem/HotelItem'
import hotel_01 from '../../../assets/images/hotel_01.jpg'
import hotel_02 from '../../../assets/images/hotel_02.jpg'
import hotel_03 from '../../../assets/images/hotel_03.jpg'



export default class Results extends React.Component{

    render(){
        return(

            <div className="full_view">
                <div className="horizontal_bar_options">

                <FormControl>
                    <InputLabel htmlFor="price_order_helper">Price</InputLabel>
                    <Select
                        value={'low'}
                    // onChange={handleChange}
                        displayEmpty
                        name="age"
                        //className={classes.selectEmpty}
                        inputProps={{
                        name: 'age',
                        id: 'price_order_helper',
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={'low'}>Low first</MenuItem>
                        <MenuItem value={'first'}>High first</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="rating_helper">Rating</InputLabel>
                    <Select
                        value={30}
                    // onChange={handleChange}
                        displayEmpty
                        name="rating"
                        //className={classes.selectEmpty}
                        inputProps={{
                        name: 'rating',
                        id: 'rating_helper',
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="stars_helper">Stars</InputLabel>
                    <Select
                        value={30}
                    // onChange={handleChange}
                        displayEmpty
                        name="stars"
                        //className={classes.selectEmpty}
                        inputProps={{
                        name: 'stars',
                        id: 'stars_helper',
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                </div>
                
                <div className="result_thumbnail">
                    <div className="fit_div_width click_me" onClick={()=>this.props.showDetails()}>
                        <HotelItem src={hotel_01} tempText='CLICK ME' hotelName="hotel_01"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem src={hotel_02} tempText='CLICK ME' hotelName="hotel_02"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem src={hotel_03} tempText='CLICK ME' hotelName="hotel_03"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                    <div className="fit_div_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>

                </div>

          </div>

        )
    }




}