
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

                    <ul className="list_contact list_style_none">
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
                            @Email : berno@berno.ca
                        </li>
                    </ul>

                </div>

                <div className="site_map">

                    <ul className="site_map_list list_style_none">
                        
                        <li> 
                            Home
                        </li>
                        <li> 
                            Search
                        </li>
                        <li>
                            List your property
                        </li>
                    </ul>

                    <ul className="site_map_list list_style_none">
                        <li>
                            About
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

                    <ul className="list_style_none social_media_list">
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