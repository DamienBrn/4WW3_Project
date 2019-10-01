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
                    <HotelItem src={hotel_01} hotelName="hotel_01"/>
                    <HotelItem src={hotel_02} hotelName="hotel_02"/>
                    <HotelItem src={hotel_03} hotelName="hotel_03"/>
                </div>
            </div>
        )
    }

    constructor(props){
        super(props)
    }

}