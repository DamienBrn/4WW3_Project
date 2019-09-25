import React from 'react'
import './LandingBackground.css'

export default class LandingBackground extends React.Component{

    render(){
        return (
            <div className="landing_background_container">
                <div className="landing_image"/>
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