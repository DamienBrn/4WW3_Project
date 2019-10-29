import React from 'react'
import './LandingBackground.css'
import hotel_video_path from '../../../assets/videos/hotel_pres.mp4'
import StarIcon from '@material-ui/icons/Star';

export default class LandingBackground extends React.Component{

    render(){
        return (
            <div className="landing_background_container">

                <video autoPlay loop muted className="landing_video" alt="video presenting our hotels">
                    <source src={hotel_video_path} type="video/mp4"/>
                </video>
                
                <div className="overlay"/>

                <section id="scroll_icon">
                    <a href="#landing_form"><span></span></a>
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
                            <StarIcon className="star_icon"/>
                        </div>
                    </div>
            </div>
        )
    }


    componentDidMount(){
        this.initListenerForSmoothScroll()
    }

    //We set an event listener for the "Scroll icon" on the landing page to create a smooth scroll when the user clicks on it
    initListenerForSmoothScroll(){
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {//We select all the anchors of the page (only one in our case)
            anchor.addEventListener('click', function (e) { //We add a listener for each one of them
                e.preventDefault(); //We prevent the default scroll behavior from triggering
        
                //We scroll the selected element into view and we apply a smooth behavior to it
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
}