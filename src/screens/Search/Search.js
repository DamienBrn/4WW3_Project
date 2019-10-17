import React from 'react'
import './Search.css'
import SearchForm from '../../components/searchPage/Form/SearchForm/SearchForm'
import  Results from '../../components/searchPage/Results/Results'
import HotelDetails from '../HotelDetails/HotelDetails'
import {withRouter, useParams} from 'react-router-dom'

class Search extends React.Component{

    render(){
        return(
            <div className="safe_view full_view display_flex_inline">
                <SearchForm/>

                <div className="right_hand_side">
                    {!this.state.showDetails && <Results showDetails={this.showDetails}/>}  

                    {this.state.showDetails && <HotelDetails id={this.state.hotelId} />}
                </div>

            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            showDetails : false,
            hotelId : 1
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    showDetails = (hotelId)=>{
        console.log('trigger')
        this.setState({
            ...this.state,
            showDetails : true,
            hotelId : hotelId
        })
    }
}

export default withRouter(Search)