import React from 'react'
import './UserReviewItem.css'
import FlagIcon from '../FlagIcon/FlagIcon'
import {
    Box, 
  } from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Rating from '@material-ui/lab/Rating';




export default class UserReviewItem extends React.Component{


    render(){
        return(


            <div className="user_review_sample">

                <div className="left_hand_side_review">
                    <div className="profile_picture">
                        <AccountCircleIcon className="user_profile_pic_sample"/>
                    </div>
                    <div>
                        Damien
                    </div>
                    <div>
                        <FlagIcon code="fr"/>
                    </div>

                </div>

                <div className="right_hand_side_review">
                    <div className="review_header">
                        <div>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                name="customized-color"
                                value={1}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" className="heart_icon"/>}
                                readOnly
                                />
                            </Box>
                        </div>
                        <div>
                            "Great vibe"
                        </div>
                    </div>
                    <div className="review_content">
                    Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                    </div>
                </div>

            </div>

        )
    }

}