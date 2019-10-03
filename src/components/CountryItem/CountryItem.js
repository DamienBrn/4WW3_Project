import React from 'react';
import './CountryItem.css'
import FlagIcon from '../FlagIcon/FlagIcon'


export default class CountryItem extends React.Component {

  render() {
    return (
      <div className="container">
         
        <div className="thumbnail">

            <img src={this.props.src} alt={this.props.cityName}/>

            <div className="country_thumbnail_header">
                <div>
                    {this.props.cityName}
                </div>
                <div>
                    <FlagIcon code={this.props.countryCode}/>
                </div>
            </div>

            <div className="number_of_properties_container">
                {this.props.nbProperties} properties
            </div>
        
        </div>

        <div className="thumbnail_overlay"></div>

      </div>
    )
  }

  constructor(props){
    super(props)
  }

}
