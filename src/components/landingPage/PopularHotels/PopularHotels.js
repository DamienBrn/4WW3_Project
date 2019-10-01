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

                <div style={{marginTop:50}}>
                    <HotelItem src={hotel_paris} hotelName="Paris"/>
                    <HotelItem src={hotel_geneva} hotelName="Geneva"/>
                    <HotelItem src={hotel_lisbonne} hotelName="Lisbonne"/>
                </div>

            </div>
        )
    }


    constructor(props){
        super(props)
    }

}