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


export default class Results extends React.Component{

    render(){
        return(

            <div className="full_view">


            <div className="results_header">
                <div className="map_results_container">
                    <div className="map_results">
                        <MapResults showDetails={this.props.showDetails}/>
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
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={'low'}>Low first</MenuItem>
                            <MenuItem value={'first'}>High first</MenuItem>
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
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={'low'}>Low first</MenuItem>
                            <MenuItem value={'first'}>High first</MenuItem>
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
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={'low'}>Low first</MenuItem>
                            <MenuItem value={'first'}>High first</MenuItem>
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
            starsSort : '',
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
        if(this.props.isLoading === true){
            return <CircularProgress className="activity_indicator"/>
        }else if(resultsArray.length != 0){
            resultsFound = resultsArray.map(item => {
                return (
                    <div key={item._id} className="fit_content_width click_me" onClick={()=>this.props.showDetails(item.id)}>
                        <HotelItem id={item._id} key={item._id} value={item.name} src={item.src} hotelName={item.name} countryCode={item.countryCode} cityName={item.city} rating={item.avgRating} price={item.avgPrice} stars={item.stars} />
                    </div>
                )
            })
        }
        
        if(resultsFound.length === 0){
            resultsFound = <div><h3>No results found for this search<br/>Try again</h3></div>
        }   

        return resultsFound
    }
}