import React from 'react'
import './Search.css'
import SearchForm from '../../components/searchPage/Form/SearchForm/SearchForm'
import  Results from '../../components/searchPage/Results/Results'
import HotelDetails from '../HotelDetails/HotelDetails'


export default class Search extends React.Component{

    render(){
        return(
            <div className="safe_view full_view display_flex_inline">
                <SearchForm/>

                <div className="right_hand_side">
                    {!this.state.showDetails && <Results showDetails={this.showDetails}/>}  

                    {this.state.showDetails && <HotelDetails/>}
                </div>

            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            showDetails : false
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    showDetails = ()=>{
        this.setState({
            ...this.state,
            showDetails : true
        })
    }
}