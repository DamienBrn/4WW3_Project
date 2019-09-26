import React from 'react'
import './LandingBackground.css'
import hotel_pres_path from '../../../assets/videos/hotel_pres.mp4'


export default class LandingBackground extends React.Component{

    render(){
        return (
            <div className="landing_background_container">

                <video autoPlay loop muted className="landing_image">
                    <source src={hotel_pres_path} type="video/mp4"/>
                </video>
                
                <div className="overlay"/>
                <section id="scroll_icon">
                    <a href="#"><span></span></a>
                    <div id="scroll_text">
                        Scroll
                    </div>
                </section>
                
                <div className="landing_text">
                        <div>
                            Find the perfect place !
                        </div>

                        <div className="star_container">
                            <div className="star_border"></div>
                            <i className="fa fa-star fa-xs star_icon"></i>
                        </div>
                    </div>


            </div>
        )
    }


    constructor(props){
        super(props)
    }

}