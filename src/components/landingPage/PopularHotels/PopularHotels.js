import React from 'react'
import HotelItem from '../../HotelItem/HotelItem'
import './PopularHotels.css'
import hotel_paris from '../../../assets/images/hotel_paris.jpg'
import hotel_geneva from '../../../assets/images/hotel_geneva.jpg'



export default class PopularHotels extends React.Component{


    render(){
        return (
          
            <div className="popular_hotel">
                <h2>Popular Hotels</h2>

                <div style={{marginTop:50}}>
                    <HotelItem src={hotel_paris}/>
                    <HotelItem src={hotel_geneva}/>
                    <HotelItem src=""/>
                </div>

            </div>
        )
    }


    constructor(props){
        super(props)
    }

}