import React from 'react'
import './UserReviewItem.css'
import FlagIcon from '../FlagIcon/FlagIcon'
import {
    Box, 
  } from '@material-ui/core'

import {
    Favorite as FavoriteIcon,
    AccountCircle as AccountCircleIcon
}from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating';
import api from '../../../backend/services/api'


export default class UserReviewItem extends React.Component{

    render(){
        return(
            <div className="user_review_container">

                <div className="left_hand_side_review">
                    <div className="user_profile_picture_container">
                        <AccountCircleIcon className="user_profile_picture"/>
                    </div>
                    <div className="username">
                        {this.state.user.firstName}
                    </div>
                    <div className="user_nationality">
                        {this.state.user.countryCode ? <FlagIcon code={this.state.user.countryCode} /> : null}
                    </div>
                </div>

                <div className="right_hand_side_review">
                    <div className="review_header">
                        <div className="user_review_rating">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                name="customized-color"
                                className="heart_icon"
                                value={this.props.rating}
                                icon={<FavoriteIcon fontSize="inherit"/>}
                                readOnly
                                />
                            </Box>
                        </div>
                        <div className="user_review_title">
                            "{this.props.title}"
                        </div>
                    </div>

                    <div className="review_content">
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </div>

            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        this.loadUserInfoForThumbnail()
    }

    loadUserInfoForThumbnail = async()=>{
        
        let userId

        await api.getReviewById(this.props.reviewId).then((review)=>{
            userId = review.data.userId
        })

        await api.getUserById(userId).then((user)=>{
            this.setState({
                ...this.state,
                user : user.data
            })
        })
    }

}