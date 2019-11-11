import React from 'react'
import HotelItemDetails from '../../components/searchPage/HotelItemDetails/HotelItemDetails'
import './HotelDetails.css'

export default class HotelDetails extends React.Component{

    render(){
        return(
            <div>
                <div className="safe_view full_view">
                    <HotelItemDetails hotelId={this.props.hotelId} />
                </div>
            </div>
        )
    }
}

