import React from 'react';
import './CityItem.css'
import FlagIcon from '../FlagIcon/FlagIcon'


export default class CityItem extends React.Component {

  render() {
    return (
      <div className="thumbnail_container">
         
        <div className="thumbnail">

          <img src={this.props.src} alt={this.props.cityName}/>

          <div className="city_thumbnail_header">
            <div>
                {this.props.cityName}
            </div>
            <div>
                <FlagIcon code={this.props.countryCode}/>
            </div>
          </div>

          <div className="city_thumbnail_footer">
            {this.props.nbProperties} properties
          </div>
        
        </div>

        <div className="thumbnail_overlay"></div>

      </div>
    )
  }
}
