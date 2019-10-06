
import React from 'react';
import './Footer.css'

import {
    Phone as PhoneIcon, 
    Place as PlaceIcon, 
    Email as EmailIcon,
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon
} from '@material-ui/icons'

import { NavLink, withRouter } from 'react-router-dom'



class Footer extends React.Component {

    render() { 
        return (  

            <footer className="footer_container">
              
                <div className="footer_content">

                    <div className="contact_info">
                        <h3>Contact Us</h3>

                        <ul className="contact_info_list list_style_none">
                            <li> 
                                <PlaceIcon/>
                                Address : 1280 Main St W, Hamilton, ON L8S 4L8
                            </li>
                            <li>
                                <PhoneIcon/>
                                #Phone : (905) 525-9140
                            </li>
                            <li>
                                <EmailIcon/>
                                @Email : bernod@bernod.ca
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
                            <li>
                                Sign Up
                            </li>
                        </ul>
                    </div>

                    <div className="social_media ">
                        <h3>Follow US</h3>

                        <ul className="social_media_list list_style_none">
                            <li title="Facebook"><FacebookIcon className="medium_scale"/></li>
                            <li title="Twitter"><TwitterIcon className="medium_scale"/></li>
                            <li title="Instagram"><InstagramIcon className="medium_scale"/></li>
                        </ul>
                    </div>

                </div>

            </footer>

        )
    }




    constructor(props) {
        super(props);
    }

}
 
export default Footer