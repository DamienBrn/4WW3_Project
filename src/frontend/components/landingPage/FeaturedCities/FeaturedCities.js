import React from 'react'
import CityItem from '../../CityItem/CityItem'
import './FeaturedCities.css'
import toronto from '../../../../assets/images/toronto.jpg'
import paris from '../../../../assets/images/paris.jpg'
import boston from '../../../../assets/images/boston.jpg'



export default class FeaturedCities extends React.Component{

    render(){
        return (
            <div className="featured_cities">
                <h2>Thousands of hotels around the world</h2>

                <div className="featured_cities_thumbnails" style={{marginTop:50}}>
                    <div>
                        <CityItem src={toronto} countryCode="ca" cityName="Toronto" nbProperties={3}/>
                    </div>
                    <div>
                        <CityItem src={paris} countryCode="fr" cityName="Paris" nbProperties={5}/>
                    </div>
                    <div>
                        <CityItem src={boston} countryCode="us" cityName="Boston" nbProperties={4}/>
                    </div>
                </div>

            </div>
        )
    }
}