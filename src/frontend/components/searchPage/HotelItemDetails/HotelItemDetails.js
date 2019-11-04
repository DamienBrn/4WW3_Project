import React from 'react'
import './HotelItemDetails.css'
import UserReviewItem from '../../UserReviewItem/UserReviewItem'
import Services from '../../Services/Services'
import hotel_01 from '../../../../assets/images/hotel_01.jpg'
import {
    Box, 
    Button, 
  } from '@material-ui/core'

import BookIcon from '@material-ui/icons/Book';
import Rating from '@material-ui/lab/Rating';
import MapSingleItem from '../MapSingleItem/MapSingleItem'
import ReviewForm from '../../ReviewForm/ReviewForm'
import api from '../../../../backend/services/api'
import FlagIcon from '../../FlagIcon/FlagIcon'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



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
                            <div>
                                <FlagIcon code={this.state.hotel.countryCode} size='3x'/>
                            </div>

                            <div>
                                <h1>{this.state.hotel.name}</h1>
                            </div>
                            
                            <div>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="details_stars"
                                        value={this.state.hotel.stars}
                                        readOnly 
                                    />
                                </Box>
                            </div>

                            <div className="average_rating_container">
                                <CircularProgressbar value={this.state.hotel.avgRating} text={`${this.state.hotel.avgRating}%`} background={true} className="avg_circle"
                                    styles={buildStyles({
                                    pathColor: this.changeColorBasedonPercentage(this.state.hotel.avgRating),
                                    textColor: '#ffffff',
                                    textSize : '35',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                    })}
                                />
                            </div>

                        </div>

                        <h3> {this.state.hotel.address}, {this.state.hotel.zipCode}, {this.state.hotel.state} </h3>


                        <Button variant="contained" color="primary" className="book_room_button">
                            Book a room
                            <BookIcon className="book_room_icon"/>
                        </Button>

                    </div>
                </div>

                <div className="bottom_section_hotel_details">

                    <div className="display_flex_row">
                        <div className="map_hotel_details">

                        {this.state.hotel.lat && this.state.hotel.lng ? <MapSingleItem name={this.state.hotel.name} lat={this.state.hotel.lat} lng={this.state.hotel.lng} /> : null}

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
                        {this.state.hotel.services ? <Services services={this.state.hotel.services} /> : null}
                        
                    </div>

                    <div className="user_reviews">
                        <h2>User Reviews (sample)</h2>
                        
                        {this.state.reviewsFormatted}

                        <div>
                            <Button disabled={JSON.parse(localStorage.getItem('user')) == undefined} variant="contained" color="primary" onClick={()=>this.handleOpen()} >
                                Add review
                            </Button>
                            <ReviewForm displayReviews={this.displayReviews} hotelId={this.state.hotel._id} open={this.state.reviewFormOpen} handleClose={this.handleClose} />
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
            user : {},
            reviewsFormatted : [],
            reviewFormOpen : false
        }
    }

    componentDidMount(){
        this.loadDetailsFromId()
        this.displayReviews()
        setTimeout(()=>{
            console.log(this.state.hotel)
        }, 200)
    }

    componentDidUpdate(){
        console.log(JSON.parse(localStorage.getItem('user')))
    }

    loadDetailsFromId = async()=>{
        await api.getHotelById(this.props.hotelId).then(hotel => {
            this.setState({
                ...this.state,
                hotel : hotel.data
            })
        })
    }

    displayReviews = ()=>{
        this.formatReviews().then((test)=>{
            this.setState({
                ...this.state,
                reviewsFormatted : test
            })
        })
    }

    formatReviews = async()=>{
        await this.loadReviewsFromId()
        let reviewsFound = []
        reviewsFound = this.reviews.map(item => {
            return (
                <UserReviewItem 
                    key={item._id}
                    reviewId={item._id} 
                    title={item.title} 
                    description={item.description} 
                    rating={item.rating} 
                />
            )
        })
        return reviewsFound
    }

    loadReviewsFromId = async()=>{
        await api.getReviewsByHotelId(this.props.hotelId).then(reviews => {
            this.reviews = reviews.data
        })
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

    //We update the color of the circle based on the percentage
  changeColorBasedonPercentage(percentage){
    let r, g, b = 0 //We set each channel to 0
    let hue
    if(percentage < 50) { //If the percentage is less than 50%, we set the red to max and update multiply the green channel by a color index, to create a "gradient" from red to orange/yellow
      r = 255;
      g = Math.round(5.1 * percentage)
    }
    else { // Same as above but we reverse the channels
      g = 255;
      r = Math.round(510 - 5.10 * percentage)
    }
    hue = r * 0x10000 + g * 0x100 + b * 0x1 // We calculate the hue by multiplying each channel by an hexadecimal index to specify the strongest colors in the gradients

    //We convert the value of the hue an hexadecimal value the css can understand
    return '#' + ('000000' + hue.toString(16)).slice(-6)
  }
}