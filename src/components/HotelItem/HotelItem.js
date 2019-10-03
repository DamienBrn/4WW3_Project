import React from 'react';
import './HotelItem.css'
import FlagIcon from '../FlagIcon/FlagIcon'



export default class HotelItem extends React.Component {

  render() {
    return (
      <div className="container">
         
        <div className="thumbnail">

          <img src={this.props.src} alt={this.props.hotelName}/>

          <div className="hotel_thumbnail_header">
            <div>
                {this.props.hotelName}
            </div>
            <div>
                <FlagIcon code={this.props.countryCode}/>
            </div>
          </div>

        </div>

        <div className="hotel_thumbnail_footer">

          {this.props.cityName}

        </div>

        <div className="thumbnail_overlay"></div>

        <h2>{this.props.tempText}</h2>

      </div>
    )
  }

  constructor(props){
    super(props)
  }

}
