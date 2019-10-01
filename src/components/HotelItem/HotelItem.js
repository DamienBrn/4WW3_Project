import React from 'react';
import './HotelItem.css'

export default class HotelItem extends React.Component {

  render() {
    return (
      <div className="container">
         
        <div className="hotel_thumbnail">
          <img src={this.props.src} alt={this.props.hotelName}/>
          <div className=""/>
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
