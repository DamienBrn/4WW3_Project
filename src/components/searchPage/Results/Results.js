import React from 'react'
import './Results.css'

import {  
    Select, 
    InputLabel, 
    FormControl, 
    MenuItem, 
  } from '@material-ui/core'

import { Link } from 'react-router-dom'

import HotelItem from '../../HotelItem/HotelItem'
import hotel_01 from '../../../assets/images/hotel_01.jpg'
import hotel_02 from '../../../assets/images/hotel_02.jpg'
import hotel_03 from '../../../assets/images/hotel_03.jpg'
import hotel_paris from '../../../assets/images/hotel_paris.jpg'
import hotel_geneva from '../../../assets/images/hotel_geneva.jpg'
import hotel_lisbonne from '../../../assets/images/hotel_lisbonne.jpg'
import MapResults from '../MapResults/MapResults'


export default class Results extends React.Component{

    render(){
        return(

            <div className="full_view">


            <div className="results_header">
                <div className="map_results_container">
                    <div className="map_results">
                        <MapResults showDetails={this.props.showDetails}/>
                    </div>
                </div>

                <div className="horizontal_bar_options">

                    <FormControl>
                        <InputLabel htmlFor="price_sort_helper">Price</InputLabel>
                        <Select
                            value={'low'}
                            displayEmpty
                            name="age"
                            inputProps={{
                            name: 'price_sort',
                            id: 'price_sort_helper',
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
                            displayEmpty
                            name="rating"
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
                            displayEmpty
                            name="stars"
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
            </div>
                
                <div className="result_thumbnail">
                    <div className="fit_content_width click_me" onClick={()=>this.props.showDetails()}>
                        <HotelItem src={hotel_01} hotelName="L'Hotel" countryCode="it" cityName="Rome" rating={86} price={125} stars={4} />
                    </div>
                    <div className="fit_content_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem src={hotel_02} hotelName="Holliday Inn" countryCode="es" cityName="Barcelona" rating={78} price={250} stars={5}/>
                    </div>
                    <div className="fit_content_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem src={hotel_03} hotelName="10x Hotel" countryCode="us" cityName="Houston" rating={82} price={80} stars={3}/>
                    </div>
                    <div>
                        <HotelItem src={hotel_paris} hotelName="Lafayette" countryCode="fr" cityName="Paris" rating={70} price={95} stars={3}/>
                    </div>
                    <div>
                        <HotelItem src={hotel_geneva} hotelName="Four Seasons" countryCode="ch" cityName="Geneva" rating={99} price={500} stars={5}/>
                    </div>
                    <div>
                        <HotelItem src={hotel_lisbonne} hotelName="PortoBay" countryCode="pt" cityName="Lisbon" rating={60} price={50} stars={2}/>
                    </div>
                    <div className="fit_content_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                    <div className="fit_content_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                    <div className="fit_content_width" onClick={()=>this.props.showDetails()}>
                        <HotelItem hotelName="hotel_sample"/>
                    </div>
                </div>

          </div>

        )
    }
}