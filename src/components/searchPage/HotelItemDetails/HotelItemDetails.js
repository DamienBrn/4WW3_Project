import React from 'react'
import './HotelItemDetails.css'
import UserReviewItem from '../../UserReviewItem/UserReviewItem'
import Services from '../../Services/Services'
import hotel_01 from '../../../assets/images/hotel_01.jpg'
import {
    Box, 
    Button, 
  } from '@material-ui/core'

import BookIcon from '@material-ui/icons/Book';
import Rating from '@material-ui/lab/Rating';
import MapSingleItem from '../MapSingleItem/MapSingleItem'
import ReviewForm from '../../ReviewForm/ReviewForm'
import api from '../../../services/api'

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
                            <h1>{this.state.hotel.name}</h1>

                            <div>
                                <Box component="fieldset" mb={3} borderColor="transparent" className="details_stars">
                                    <Rating
                                        name="details_stars"
                                        value={this.state.hotel.stars}
                                        readOnly 
                                    />
                                </Box>
                            </div>
                        </div>

                        <h3> {this.state.hotel.address}, {this.state.hotel.zipCode}, {this.state.hotel.state} </h3>

                        <div className="average_rating_container">
                            <h3>Average Rating : </h3>
                            <div id="average_rating">{this.state.hotel.avgRating}</div>
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

                            <MapSingleItem lat={87} lng={this.state.hotel.lng} />

                        </div>

                        <div className="hotel_description">
                            <h3>Hotel Description</h3>
                            <div>
                                {this.state.hotel.description}
                            </div>

                        </div>
                    </div>

                    <div className="services">
                        <h2>Services (sample)</h2>
                        <Services services={this.state.hotel.services} />
                    </div>

                    <div className="user_reviews">
                        <h2>User Reviews (sample)</h2>
                        
                        {this.displayReviews()}

                        <div>
                            <Button disabled={JSON.parse(localStorage.getItem('user')) == undefined} variant="contained" color="primary" onClick={()=>this.handleOpen()} >
                                Add review
                            </Button>

                            <ReviewForm open={this.state.reviewFormOpen} handleClose={this.handleClose} />

                        </div>

                    </div>

                </div>

            </div>
        )
    }

    constructor(props){
        super(props)
        this.reviews = []
        this.state = {
            hotel : {},
            reviewFormOpen : false
        }
    }

    componentDidMount(){
        this.loadDetailsFromId()
    }

    loadDetailsFromId = async()=>{
        await api.getHotelById(this.props.hotelId).then(hotel => {
            this.setState({
                ...this.state,
                hotel : hotel.data
            })
        })
    }

    loadReviewsFromId = async()=>{
        await api.getReviewsByHotelId(this.props.hotelId).then(reviews => {
            this.reviews = reviews.data
        })
    }

    displayReviews(){
        this.loadReviewsFromId()
        let reviewsFound = []
        reviewsFound = this.reviews.map(item => {
            return (
                <UserReviewItem key={item._id} title={item.title} description={item.description} rating={item.rating} />
            )
        })
        return reviewsFound
    }

    handleOpen(){
        this.setState({
            ...this.state,
            reviewFormOpen : true
        })
    }
    handleClose = ()=>{
        this.setState({
            ...this.state,
            reviewFormOpen : false
        })
    }

}