import React from 'react'
import './HotelItemDetails.css'
import UserReviewItem from '../../UserReviewItem/UserReviewItem'
import Services from '../../Services/Services'
import hotel_01 from '../../../assets/images/hotel_01.jpg'
import {
    Box, 
    Button, 
  } from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite';
import BookIcon from '@material-ui/icons/Book';
import Rating from '@material-ui/lab/Rating';
import MapSingleItem from '../MapSingleItem/MapSingleItem'

export default class HotelItemDetails extends React.Component{

    render(){

        return(
            <div>
                <div className="top_section_hotel_details">
                    <div className="hotel_detail_img_container">
                        <img src={hotel_01} alt="hotel_detail_img with nice building and trees at night" className="hotel_detail_img"/>
                    </div>
                    
                    <div className="details_top_right_hand_side">

                        <div className="details_header_title_stars">
                            <h1>L'Hotel</h1>

                            <div>
                                <Box component="fieldset" mb={3} borderColor="transparent" className="details_stars">
                                    <Rating
                                        name="details_stars"
                                        value={4}
                                        readOnly 
                                    />
                                </Box>
                            </div>
                        </div>

                        <h3> Piazza del Colosseo, 1, 00184 Roma RM, Italy</h3>

                        <div className="average_rating_container">
                            <h3>Average Rating : </h3>
                            <div id="average_rating">4.7</div>
                        </div>

                        <div className="display_flex_row">
                            <h3>Rate this hotel : </h3>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                name="customized-color"
                                value={2}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" className="heart_icon"/>}
                                />
                            </Box>
                        </div>

                        <Button variant="contained" color="primary" className="book_room_button">
                            Book a room
                            <BookIcon className="book_room_icon"/>
                        </Button>

                    </div>
                </div>

                <div className="bottom_section_hotel_details">

                    <div className="display_flex_row">
                        <div className="map_hotel_details">

                            <MapSingleItem/>

                        </div>

                        <div className="hotel_description">
                            <h3>Hotel Description</h3>
                            <div>
                                <p>
                                    Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.

                                    Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.

                                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.

                                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="services">
                        <h2>Services (sample)</h2>
                        <Services/>
                    </div>

                    <div className="user_reviews">
                        <h2>User Reviews (sample)</h2>
                        
                        <UserReviewItem/>
                        <UserReviewItem/>
                        <UserReviewItem/>
                        <UserReviewItem/>

                    </div>

                </div>

            </div>
        )
    }
}