import React from 'react'
import CountryItem from '../../CountryItem/CountryItem'
import './FeaturedCountries.css'
import toronto from '../../../assets/images/toronto.jpg'
import paris from '../../../assets/images/paris.jpg'
import boston from '../../../assets/images/boston.jpg'




export default class FeaturedCountries extends React.Component{

    render(){
        return (
            <div className="featured_countries">
                <h2>Thousands of hotels around the world</h2>

                <div className="featured_countries_thumbnails" style={{marginTop:50}}>
                    <div>
                        <CountryItem src={toronto} countryCode="ca" cityName="Toronto" nbProperties={3}/>
                    </div>
                    <div>
                        <CountryItem src={paris} countryCode="fr" cityName="Paris" nbProperties={5}/>
                    </div>
                    <div>
                        <CountryItem src={boston} countryCode="us" cityName="Boston" nbProperties={4}/>
                    </div>
                </div>

            </div>
        )
    }

    constructor(props){
        super(props)
    }

}