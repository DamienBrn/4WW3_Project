import React from 'react'
import './Search.css'
import SearchForm from '../../components/searchPage/Form/SearchForm/SearchForm'
import  Results from '../../components/searchPage/Results/Results'
import HotelDetails from '../HotelDetails/HotelDetails'
import {withRouter} from 'react-router-dom'
import api from '../../../backend/services/api'


class Search extends React.Component{

    render(){
        return(
            <div className="safe_view full_view display_flex_inline">
                <SearchForm loadHotels={this.loadHotels} updateResultList={this.updateResultList}/>

                <div className="right_hand_side">
                    {!this.state.showDetails && <Results results={this.state.results} isLoading={this.state.isLoading} showDetails={this.showDetails}/>}  

                    {this.state.showDetails && <HotelDetails hotelId={this.state.hotelId} />}
                </div>
            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            showDetails : false,
            hotelId : '',
            results : [],
            isLoading : false
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.loadHotels()
    }

    showDetails = (hotelId)=>{
        this.setState({
            ...this.state,
            hotelId : hotelId,
            showDetails : true,
        })
    }

    updateResultList = (results)=>{
        this.setState({
            ...this.state,
            results : results
        })
    }

    loadHotels = async()=>{
        this.setState({...this.state, isLoading :  true})
        await api.getAllHotels().then(hotels => {
            this.setState({...this.state, isLoading :  false})
            this.setState({
                ...this.state,
                results : hotels.data
            })
        })
      }
}
export default withRouter(Search)