import React from 'react'
import './SearchForm.css'
import { 
  TextField, 
  Box, 
  Button, 
  Select, 
  InputLabel, 
  FormControl, 
  Typography, 
  MenuItem 
} from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Rating from '@material-ui/lab/Rating';
import {AirbnbSlider, AirbnbThumbComponent} from './AirbnbSlider'
import api from '../../../../../backend/services/api'


export default class SearchForm extends React.Component{
    render(){
        return (
            <div className="search_form_container">

              <div className="search_layout_container">

                <form className="search_form" onSubmit={(event) => this.handleSubmit(event)}>

                  <Button variant="contained" color="primary" className="spaced_element" onClick={()=>this.searchNearbyHotels()}>
                        Nearby hotels
                        <HomeIcon className="icon_left"/>
                  </Button>
                  <div>
                    lat : {this.state.userPosition.lat}<br/>
                    lng : {this.state.userPosition.lng}
                  </div>

                    <TextField
                      id="outlined-name"
                      name="destinationProperty"
                      label="Destination / Property"
                      className="spaced_element"
                      margin="normal"
                      variant="outlined"
                      onChange={(event)=>this.handleChange(event)}
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className="spaced_element"
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date_picker_arrival"
                            label="From"
                            value={this.state.selectedDate.from}
                            onChange={(date)=>this.handleDateChange(date, 'from')}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                        <KeyboardDatePicker
                            className="spaced_element"
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date_picker_departure"
                            label="To"
                            value={this.state.selectedDate.to}
                            onChange={(date)=>this.handleDateChange(date, 'to')}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                      </MuiPickersUtilsProvider>  

                      <FormControl variant="outlined" className="spaced_element">
                        <InputLabel  htmlFor="number_adults">
                          Adults
                        </InputLabel>
                        <Select
                          value={this.state.numberOfAdults}
                          onChange={(event)=>this.handleChange(event)}
                          labelWidth={50}
                          inputProps={{
                            name: 'numberOfAdults',
                            id: 'number_adults',
                          }}
                        >
                            <MenuItem value={1}>1 adult</MenuItem>
                            <MenuItem value={2}>2 adults</MenuItem>
                            <MenuItem value={3}>3 adults</MenuItem>
                            <MenuItem value={4}>4 adults</MenuItem>
                            <MenuItem value={5}>5 adults</MenuItem>
                            <MenuItem value={6}>6 adults</MenuItem>
                            <MenuItem value={7}>7 adults</MenuItem>
                            <MenuItem value={8}>8 adults</MenuItem>
                            <MenuItem value={9}>9 adults</MenuItem>
                            <MenuItem value={10}>10 adults</MenuItem>
                        </Select>
                      </FormControl>


                      <div className="grouped_input spaced_element">
                        <FormControl variant="outlined">
                          <InputLabel  htmlFor="number_children">
                            Children
                          </InputLabel>
                          <Select
                            value={this.state.numberOfChildren}
                            onChange={(event)=>this.handleChange(event)}
                            labelWidth={60}
                            inputProps={{
                              name: 'numberOfChildren',
                              id: 'number_children',
                            }}
                          >
                            <MenuItem value={0}>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1 child</MenuItem>
                            <MenuItem value={2}>2 children</MenuItem>
                            <MenuItem value={3}>3 children</MenuItem>
                            <MenuItem value={4}>4 children</MenuItem>
                            <MenuItem value={5}>5 children</MenuItem>
                            <MenuItem value={6}>6 children</MenuItem>
                            <MenuItem value={7}>7 children</MenuItem>
                            <MenuItem value={8}>8 children</MenuItem>
                            <MenuItem value={9}>9 children</MenuItem>
                            <MenuItem value={10}>10 children</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl variant="outlined">
                          <InputLabel  htmlFor="number_rooms">
                            Rooms
                          </InputLabel>
                          <Select
                            value={this.state.numberOfRooms}
                            onChange={(event)=>this.handleChange(event)}
                            labelWidth={50}
                            inputProps={{
                              name: 'numberOfRooms',
                              id: 'number_rooms',
                            }}
                          >
                            <MenuItem value={1}>1 room</MenuItem>
                            <MenuItem value={2}>2 rooms</MenuItem>
                            <MenuItem value={3}>3 rooms</MenuItem>
                            <MenuItem value={4}>4 rooms</MenuItem>
                            <MenuItem value={5}>5 rooms</MenuItem>
                            <MenuItem value={6}>6 rooms</MenuItem>
                            <MenuItem value={7}>7 rooms</MenuItem>
                            <MenuItem value={8}>8 rooms</MenuItem>
                            <MenuItem value={9}>9 rooms</MenuItem>
                            <MenuItem value={10}>10 rooms</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      
                      <div className="stars_container">
                        <Box component="fieldset" mb={3} borderColor="transparent" className="spaced_element">
                          <Typography component="legend">Stars</Typography>
                          <Rating
                            name="numberOfStars"
                            value={this.state.numberOfStars}
                            onChange={(event) => this.handleChange(event)}
                          />
                        </Box>
                      </div>

                      <div>
                            <h3>Price /night</h3>
                        <div className="price_range_labels">
                          <div>
                            <span className="float_left">Min :</span><span className="float_right price_range_values">
                            {this.state.priceRange[0]}$
                            </span>
                          </div>
                          <div>
                            <span className="float_left">Max :</span><span className="float_right price_range_values">
                            {this.state.priceRange[1]}$
                            </span>
                          </div>
                        </div>

                        <AirbnbSlider className="spaced_element"
                          ThumbComponent={AirbnbThumbComponent}
                          getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
                          value={this.state.priceRange}
                          onChange={(e, newValue)=>this.handlePriceChange(newValue)}
                          valueLabelDisplay="on"
                          min={0}
                          max={1000}
                        />
                      </div>
                          

                      <Button type="submit" variant="contained" color="primary" className="spaced_element">
                        Search
                        <SearchIcon className="icon_left"/>
                      </Button>

                  </form>

              </div>

            </div>
        )
    }

    constructor(props){
      super(props)
      this.state = {
          destinationProperty : '',
          selectedDate : {
            from : new Date(),
            to : new Date()
          },
          numberOfAdults : 1,
          numberOfChildren : 0,
          numberOfRooms : 1,
          numberOfStars : 4,
          priceRange : [0, 40],
          userPosition : {
            lat : 0,
            lng : 0
        }
      }
  }

    //General method to handle the changes to an input value
  handleChange(event){
    this.setState({
        ...this.state,
        [event.target.name]: event.target.name === 'numberOfStars' ? parseInt(event.target.value, 10) : event.target.value
    })
  }

  //We update the values of the slider 
  handlePriceChange(newValue){
    this.setState({
      ...this.state,
      priceRange : newValue
    })
  }

  //We update the value of the date pickers
  handleDateChange(newDate, key){
      this.setState({
        ...this.state,
          selectedDate : {
            ...this.state.selectedDate,
            [key] : newDate
          }
      })
  }

  //We get the user's location when the corresponding button is pressed
  searchNearbyHotels(){
    this.getUserLocation()
  }

//We get the current posistion of the user
  getUserLocation() {
      if (navigator.geolocation) {
        //if successful, we call the callback "showUserPosition"
          navigator.geolocation.getCurrentPosition((position)=>this.showUserPosition(position));
      }
  }

  //We update the state with the new values
  showUserPosition(position){
      this.setState({
          ...this.state,
          userPosition : {
              ...this.userPosition,
              lat : position.coords.latitude,
              lng : position.coords.longitude
          }
      })
  }


  handleSubmit = async(event)=>{
    event.preventDefault();
/*
    const payload = {stars : this.state.numberOfStars, priceRange : this.state.priceRange}
    await api.getHotelsPayload(payload).then((res)=>{
      this.props.updateResultList(res.data)
    })*/

    if(this.state.destinationProperty.length === 0){
      this.props.loadHotels()
    }else{
      await api.getHotelsByName(this.state.destinationProperty).then(hotels => {
        this.props.updateResultList(hotels.data) 
      })
    }
  }
}