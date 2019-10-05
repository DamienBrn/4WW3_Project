import React from 'react'
import HotelItem from '../../HotelItem/HotelItem'
import './PopularHotels.css'
import hotel_paris from '../../../assets/images/hotel_paris.jpg'
import hotel_geneva from '../../../assets/images/hotel_geneva.jpg'
import hotel_lisbonne from '../../../assets/images/hotel_lisbonne.jpg'


export default class PopularHotels extends React.Component{

    render(){
        return (
          
            <div className="popular_hotel">
                <h2>Popular Hotels</h2>

                <div className="popular_hotels_thumbnails" style={{marginTop:50}}>
                    <div>
                    <HotelItem src={hotel_paris} hotelName="Lafayette" countryCode="fr" cityName="Paris"/>
                    </div>
                    <div>
                    <HotelItem src={hotel_geneva} hotelName="Four Seasons" countryCode="ch" cityName="Geneva"/>
                    </div>
                    <div>
                    <HotelItem src={hotel_lisbonne} hotelName="PortoBay" countryCode="pt" cityName="Lisbon"/>
                    </div>
                </div>

            </div>
        )
    }


    constructor(props){
        super(props)
    }

}