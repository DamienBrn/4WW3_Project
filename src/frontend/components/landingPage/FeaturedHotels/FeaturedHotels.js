import React from 'react'
import './FeaturedHotels.css'
import HotelItem from '../../HotelItem/HotelItem'
import hotel_01 from '../../../../assets/images/hotel_01.jpg'
import hotel_02 from '../../../../assets/images/hotel_02.jpg'
import hotel_03 from '../../../../assets/images/hotel_03.jpg'


export default class FeaturedHotels extends React.Component{

    render(){
        return (
            <div className="featured_hotels">
                <h2 className="">Featured Hotels</h2>

                <div className="featured_hotels_thumbnails" style={{marginTop:50}}>
                    <div>
                        <HotelItem src={hotel_01} hotelName="L'Hotel" countryCode="it" cityName="Rome" rating={86} price={125} stars={4}/>
                    </div>
                    <div>
                        <HotelItem src={hotel_02} hotelName="Holliday Inn" countryCode="es" cityName="Barcelona" rating={78} price={250} stars={5}/>
                    </div>
                    <div>
                        <HotelItem src={hotel_03} hotelName="10x Hotel" countryCode="us" cityName="Houston" rating={82} price={80} stars={3}/>
                    </div>
                </div>
            </div>
        )
    }
}