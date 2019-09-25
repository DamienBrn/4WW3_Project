import React from 'react'
import HotelItem from '../../HotelItem/HotelItem'
import './FeaturedCountries.css'
import toronto from '../../../assets/images/toronto.jpg'
import paris from '../../../assets/images/paris.jpg'
import boston from '../../../assets/images/boston.jpg'




export default class FeaturedCountries extends React.Component{

    render(){
        return (
            <div className="featured_countries">
                <h2>Thousands of hotels around the world</h2>

                <div style={{marginTop:50}}>
                    <HotelItem src={toronto}/>
                    <HotelItem src={paris} />
                    <HotelItem src={boston} />
                </div>

            </div>
        )
    }

    constructor(props){
        super(props)
    }

}