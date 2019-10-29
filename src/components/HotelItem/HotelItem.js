import React from 'react';
import './HotelItem.css'
import FlagIcon from '../FlagIcon/FlagIcon'
import Rating from '@material-ui/lab/Rating';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
              <CircularProgressbar value={this.props.rating} text={`${this.props.rating}%`} background={true} className="avg_circle"
              
              styles={buildStyles({
                pathColor: this.changeColorBasedonPercentage(this.props.rating),
                textColor: '#ffffff',
                textSize : '35',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
              
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
