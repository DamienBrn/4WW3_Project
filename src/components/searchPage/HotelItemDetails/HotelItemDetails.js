import React from 'react'
import './HotelItemDetails.css'
import hotel_01 from '../../../assets/images/hotel_01.jpg'
import { TextField, 
    Box, 
    Button, 
    Select, 
    InputLabel, 
    FormControl, 
    Typography, 
    MenuItem, 
    Slider
  } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';



export default class HotelItemDetails extends React.Component{

    render(){

        return(
            <div>

                <div className="top_section_hotel_details">
                    <div className="hotel_detail_img_container">
                        <img src={hotel_01} className="hotel_detail_img"/>
                    </div>
                    
                    <div>



                        <h1>Name of the hotel</h1>
                        <h3>Address / Country</h3>
                        <h3>Number of stars</h3>
                        <h3>Average Rating</h3>
                        <h3>Like button</h3>

                    </div>
                </div>

                <div className="bottom_section_hotel_details">


                    <div>

                        Map

                    </div>


                    <div>

                        Hotel Description

                    </div>

                    <div>

                        Services / Facilities

                    </div>

                    <div>

                        User reviews

                    </div>

                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rate this hotel</Typography>
                        <Rating
                        name="customized-color"
                        value={2}
                        //getLabelText='test'
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" className="heart_icon"/>}
                        />
                     </Box>

                </div>

            </div>
        )
    }
}