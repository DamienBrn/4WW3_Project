
import React from 'react';
import './LandingPage.css'

import LandingBackground from '../../components/landingPage/LandingBackground/LandingBackground' 
import LandingSearchForm from '../../components/landingPage/LandingSearchForm/LandingSearchForm'
import FeaturedHotels from '../../components/landingPage/FeaturedHotels/FeaturedHotels'
import FeaturedCountries from '../../components/landingPage/FeaturedCountries/FeaturedCountries'
import PopularHotels from '../../components/landingPage/PopularHotels/PopularHotels'
import Mapitem from '../../components/landingPage/MapItem/MapItem'


export default class LandingPage extends React.PureComponent {

    render() { 
        return (  

        <div>
            <div className="landing_top_section">
                
                <LandingBackground/>
                <LandingSearchForm/>

            </div>

            <div>

                <FeaturedHotels/>

                <FeaturedCountries/>
                
                <PopularHotels/>
            
            </div>

            <Mapitem/>

        </div>

        )
    }
}