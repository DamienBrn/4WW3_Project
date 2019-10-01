import React from 'react'
import HotelItemDetails from '../../components/searchPage/HotelItemDetails/HotelItemDetails'
import './HotelDetails.css'



export default class HotelDetails extends React.PureComponent{

    render(){
        return(
            <div>
                <head>
                    <meta name="og:latitude" content="37.416343"/>
                    <meta name="og:longitude" content="-122.153013"/>

                    <div itemscope itemtype="https://schema.org/Review"></div>

                    <div itemprop="aggregateRating" itemscope itemtype="https://berno-hotels.com/rating">
                        RATING:
                        <span itemprop="ratingValue">9.4</span> 
                        <span itemprop="ratingCount">5217</span> ratings 
                    </div>

                    <span itemprop="name">The best place for professional meetings</span>
                        <span itemprop="author" itemscope itemtype="https://berno-hotels.com/review">
                            <span itemprop="name">Jeff Bezos</span>
                        </span>

                </head>



                <div className="safe_view full_view">
                    <HotelItemDetails/>
                </div>
            </div>
        )
    }

}