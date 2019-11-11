import React from 'react';
import './HotelItem.css'
import FlagIcon from '../FlagIcon/FlagIcon'
import Rating from '@material-ui/lab/Rating';
import CircularProgressbar from '../CircularProgressBar/CircularProgressBar'


export default class HotelItem extends React.Component {

  render() {
    return (
      <div className="thumbnail_container main_container">
         
        <div className="thumbnail">

          <img src={this.props.src} alt={this.props.hotelName}/>

          <div className="hotel_thumbnail_header">
            <div>
                {this.props.hotelName}
            </div>
            <div>
                <Rating
                  readOnly
                  name="number_stars"
                  value={this.props.stars}
                />
            </div>
            <div className="thumbnail_avg_rating">
              <CircularProgressbar 
                value={this.props.rating} 
                text={`${this.props.rating}%`} 
                background={true} 
                className="avg_circle"
              />
            </div>
          </div>

          <div className="hotel_thumbnail_footer">
            <div>
              <FlagIcon code={this.props.countryCode}/>
            </div>
            <div>
              {this.props.cityName}
            </div>
            <div>
              {this.props.price}$
            </div>
            
          </div>

        </div>

        <div className="thumbnail_overlay"></div>

        <h2>{this.props.tempText}</h2>

      </div>
    )
  }
}

