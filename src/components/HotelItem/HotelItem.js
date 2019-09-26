import React from 'react';
import './HotelItem.css'

export default class HotelItem extends React.Component {

  render() {
    return (
      <div className="container">
         
        <div className="hotel_thumbnail">
          <img src={this.props.src} />
          <div className=""/>
        </div>

      </div>
    )
  }

  constructor(props){
    super(props)
  }

}
