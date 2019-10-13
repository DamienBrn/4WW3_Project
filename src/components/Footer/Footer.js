import React from 'react';
import './Footer.css'
import SignupForm from '../SignupForm/SignupForm'
import {
    Phone as PhoneIcon, 
    Place as PlaceIcon, 
    Email as EmailIcon,
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon
} from '@material-ui/icons'

import { NavLink} from 'react-router-dom'


class Footer extends React.Component {

    render() { 
        return (  

            <footer className="footer_container">
              
                <div className="footer_content">

                    <div className="contact_info">
                        <h3>Contact Us</h3>

                        <ul className="contact_info_list list_style_none">
                            <li id="contact_address"> 
                                <PlaceIcon/>
                                <a target="_blank" href="https://www.google.ca/maps/place/1280+Main+St+W,+Hamilton,+ON+L8S+4L8/@43.2622484,-79.9224748,17z/data=!3m1!4b1!4m5!3m4!1s0x882c84b28e16079d:0x1f203c087d69dafd!8m2!3d43.2622445!4d-79.9202861"> Address : 1280 Main St W, Hamilton, ON L8S 4L8</a>
                            </li>
                            <li>
                                <PhoneIcon/>
                                #Phone : (905) 525-9140
                            </li>
                            <li id="contact_email">
                                <EmailIcon/>
                                <a href = "mailto: bernod@mcmaster.ca">@Email : bernod@mcmaster.ca</a>
                            </li>
                        </ul>
                    </div>

                    <div className="site_map">
                        <h3>Site map</h3>

                        <ul className="site_map_list list_style_none">
                            
                            <li> 
                                <NavLink to="/" >Home</NavLink>
                            </li>
                            <li> 
                                <NavLink to="/search" >Search</NavLink>
                            </li>
                            <li>
                                <NavLink to="/submit" >List your property</NavLink>
                            </li>
                        </ul>

                        <ul className="site_map_list list_style_none">
                            <li>
                                <NavLink to="/about" >About</NavLink>
                            </li>
                            <li>
                                Login
                            </li>
                            <li onClick={()=>this.handleClickOpen()}>
                                Sign Up
                            </li>
                        </ul>
                    </div>

                    <div className="social_media ">
                        <h3>Follow US</h3>

                        <ul className="social_media_list list_style_none">
                            <li title="Facebook"><a target="_blank" href="https://www.facebook.com/mcmasteruniversity/"><FacebookIcon className="medium_scale"/></a></li>
                            <li title="Twitter"><a target="_blank" href="https://twitter.com/mcmasteru?lang=fr"><TwitterIcon className="medium_scale"/></a></li>
                            <li title="Instagram"><a target="_blank" href="https://www.instagram.com/mcmasteru/?hl=fr-ca"><InstagramIcon className="medium_scale"/></a></li>
                        </ul>
                    </div>

                </div>

                <SignupForm open={this.state.signUpFormOpen} handleClose={this.handleClose}/>

            </footer>

        )
    }


    constructor(props){
        super(props)
        this.state = {
            signUpFormOpen : false,
        }
    }

    handleClickOpen(){
        this.setState({
            signUpFormOpen : true
        })
    }

    handleClose = ()=>{
        this.setState({
            signUpFormOpen : false 
        })
    }

}
 
export default Footer