import React from 'react'
import './Results.css'
import {  
    Select, 
    InputLabel, 
    FormControl, 
    MenuItem,
    CircularProgress 
  } from '@material-ui/core'
import HotelItem from '../../HotelItem/HotelItem'
import MapResults from '../MapResults/MapResults'
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';

export default class Results extends React.Component{

    render(){
        return(

            <div className="full_view">


            <div className="results_header">
                <div className="map_results_container">
                    <div className="map_results">
                        <MapResults results={this.props.results} showDetails={this.props.showDetails}/>
                    </div>
                </div>

                <div className="horizontal_bar_options">

                    <FormControl>
                        <InputLabel htmlFor="priceSort">Price</InputLabel>
                        <Select
                            value={this.state.priceSort}
                            displayEmpty
                            inputProps={{
                                name: 'priceSort',
                                id: 'priceSort',
                            }}
                            onChange={(event)=>this.handleChange(event)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={'low'}>Low first</MenuItem>
                            <MenuItem value={'high'}>High first</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="ratingSort">Rating</InputLabel>
                        <Select
                            value={this.state.ratingSort}
                            displayEmpty
                            inputProps={{
                                name: 'ratingSort',
                                id: 'ratingSort',
                            }}
                            onChange={(event)=>this.handleChange(event)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={'low'}>Low first</MenuItem>
                            <MenuItem value={'high'}>High first</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="starsSort">Stars</InputLabel>
                        <Select
                            value={this.state.starsSort}
                            displayEmpty
                            inputProps={{
                                name: 'starsSort',
                                id: 'starsSort',
                            }}
                            onChange={(event)=>this.handleChange(event)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={'low'}>Low first</MenuItem>
                            <MenuItem value={'high'}>High first</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
                
                <div className="result_thumbnail">
                    {this.displayResults(this.props.results)}
                </div>
          </div>

        )
    }

    constructor(props){
        super(props)
        this.state = {
            priceSort : '',
            ratingSort : '',
            starsSort : ''
        }
    }

    handleChange(event){
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    displayResults(resultsArray){
        let resultsFound = []

        if(this.props.isLoading){
            return this.displayActivityIndicator()

        }else if(resultsArray.length !== 0){

            resultsArray = this.sortBasedOnChosenCriteriaIfNeeded(resultsArray)

            resultsFound = this.displayHotelItems(resultsArray)
        }
        
        if(resultsFound.length === 0){
            resultsFound = this.displayNoResultsMessage()
        }   

        return resultsFound
    }



    displayActivityIndicator(){
        return <CircularProgress className="activity_indicator"/>
    }

    sortBasedOnChosenCriteriaIfNeeded(resultsArray){
        if(this.state.priceSort !== ''){
            resultsArray = this.sortResults('Prices', this.state.priceSort, resultsArray)
        }
        if(this.state.ratingSort !== ''){
            resultsArray = this.sortResults('Ratings', this.state.ratingSort, resultsArray)
        }
        if(this.state.starsSort !== ''){
            resultsArray = this.sortResults('Stars', this.state.starsSort, resultsArray)
        }

        return resultsArray
    }


    displayHotelItems(resultsArray){
        const baseUrl = "http://localhost:4000/"

        return resultsArray.map(item => {
            return (
                <div key={item._id} className="fit_content_width click_me" onClick={()=>this.props.showDetails(item._id)}>
                    <HotelItem id={item._id} key={item._id} value={item.name} src={baseUrl + item.frontPic} hotelName={item.name} countryCode={item.countryCode} cityName={item.city} rating={item.avgRating} price={item.avgPrice} stars={item.stars} />
                </div>
            )
        })
    }

    displayNoResultsMessage(){
        return(
            <div className="no_results_message">
                <DomainDisabledIcon fontSize="large" color="primary" />
                <div><h3>No results found for this search<br/>Try with another name</h3></div>
            </div>
        )
    }


    sortResults(element, order, resultsArray){
        return resultsArray.sort(this['compare'+ element + order[0].toUpperCase() + order.slice(1, order.length ) + 'First'])
    }


    compareRatingsLowFirst(h1, h2) {
        return h1.avgRating - h2.avgRating
    }
    
    compareRatingsHighFirst(h1, h2) {
        return h2.avgRating - h1.avgRating
    }

    //-------------SORT BY PRICE------------------------


    comparePricesLowFirst(h1, h2) {
        return h1.avgPrice - h2.avgPrice
    }
    
    comparePricesHighFirst(h1, h2) {
        return h2.avgPrice - h1.avgPrice
    }

    //-------------SORT BY STARS------------------------

    compareStarsLowFirst(h1, h2) {
        return h1.stars - h2.stars
    }
    
    compareStarsHighFirst(h1, h2) {
        return h2.stars - h1.stars
    }
      

}