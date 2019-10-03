import React from 'react'
import './FeaturedHotels.css'
import HotelItem from '../../HotelItem/HotelItem'
import hotel_01 from '../../../assets/images/hotel_01.jpg'
import hotel_02 from '../../../assets/images/hotel_02.jpg'
import hotel_03 from '../../../assets/images/hotel_03.jpg'


export default class FeaturedHotels extends React.Component{


    render(){
        return (
            <div className="featured_hotels">
                <h2 className="">Featured Hotels</h2>

                <div style={{marginTop:50}}>
                    <HotelItem src={hotel_01} hotelName="L'Hotel" countryCode="it" cityName="Rome"/>
                    <HotelItem src={hotel_02} hotelName="Holliday Inn" countryCode="es" cityName="Barcelona"/>
                    <HotelItem src={hotel_03} hotelName="10x Hotel" countryCode="us" cityName="Houston"/>
                </div>
            </div>
        )
    }

    constructor(props){
        super(props)
    }

}