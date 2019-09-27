import React from 'react'
import './SearchForm.css'
import HotelItem from '../HotelItem/HotelItem'
import hotel_01 from '../../assets/images/hotel_01.jpg'
import hotel_02 from '../../assets/images/hotel_02.jpg'
import hotel_03 from '../../assets/images/hotel_03.jpg'


import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';



import DateFnsUtils from '@date-io/date-fns';


export default class SearchForm extends React.Component{
    render(){
        return (

            <div className="search_form_container">


              <div className="search_layout_container">



                <div className="search_flex_display">

                  <form className="search_form">

                  <TextField
                    id="outlined-name"
                    label="Destination / Property"
                    className="spaced_element"
                    margin="normal"
                    variant="outlined"
                  />

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                          className="spaced_element"
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={this.state.selectedDate}
                          onChange={()=>this.handleDateChange()}
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
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={this.state.selectedDate}
                          onChange={()=>this.handleDateChange()}
                          KeyboardButtonProps={{
                              'aria-label': 'change date',
                          }}
                      />
                    </MuiPickersUtilsProvider>  


                    <FormControl variant="outlined" className="spaced_element">
                      <InputLabel  htmlFor="outlined-age-simple">
                        Adults
                      </InputLabel>
                      <Select
                        value={"test"}
                       /* onChange={}
                        labelWidth={}*/
                        inputProps={{
                          name: 'age',
                          id: 'outlined-age-simple',
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>1 adult</MenuItem>
                        <MenuItem value={20}>2 adults</MenuItem>
                        <MenuItem value={30}>3 adults</MenuItem>
                      </Select>
                    </FormControl>


                    <div className="grouped_input spaced_element">
                      <FormControl variant="outlined">
                        <InputLabel  htmlFor="outlined-age-simple">
                          Children
                        </InputLabel>
                        <Select
                          value={"test"}
                        /* onChange={}
                          labelWidth={}*/
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-simple',
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>1 child</MenuItem>
                          <MenuItem value={20}>2 children</MenuItem>
                          <MenuItem value={30}>3 children</MenuItem>
                        </Select>
                      </FormControl>

                      <FormControl variant="outlined">
                        <InputLabel  htmlFor="outlined-age-simple">
                          Rooms
                        </InputLabel>
                        <Select
                          value={"test"}
                        /* onChange={}
                          labelWidth={}*/
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-simple',
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>1 room</MenuItem>
                          <MenuItem value={20}>2 rooms</MenuItem>
                          <MenuItem value={30}>3 rooms</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <Box component="fieldset" mb={3} borderColor="transparent" className="spaced_element">
                      <Typography component="legend">Stars</Typography>
                      <Rating
                        name="simple-controlled"
                        /*value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}*/
                      />
                    </Box>

                    <AirbnbSlider className="spaced_element"
                      ThumbComponent={AirbnbThumbComponent}
                      getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
                      defaultValue={[20, 40]}
                    />
                    
                    <Button variant="contained" color="primary" className="spaced_element">
                      Search
                    {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                    <SearchIcon className="search_icon">send</SearchIcon>
                  </Button>

                  </form>
                  
                  <div className="results_section">

                    <div className="horizontal_bar_options">


                    <FormControl>
                      <InputLabel htmlFor="price_order_helper">Price</InputLabel>
                      <Select
                        value={'low'}
                       // onChange={handleChange}
                        displayEmpty
                        name="age"
                        //className={classes.selectEmpty}
                        inputProps={{
                          name: 'age',
                          id: 'price_order_helper',
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'low'}>Low first</MenuItem>
                        <MenuItem value={'first'}>High first</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <InputLabel htmlFor="rating_helper">Rating</InputLabel>
                      <Select
                        value={30}
                       // onChange={handleChange}
                        displayEmpty
                        name="rating"
                        //className={classes.selectEmpty}
                        inputProps={{
                          name: 'rating',
                          id: 'rating_helper',
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <InputLabel htmlFor="stars_helper">Stars</InputLabel>
                      <Select
                        value={30}
                       // onChange={handleChange}
                        displayEmpty
                        name="stars"
                        //className={classes.selectEmpty}
                        inputProps={{
                          name: 'stars',
                          id: 'stars_helper',
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>


                    </div>
                    
                    <div>
                          <HotelItem src={hotel_01}/>
                          <HotelItem src={hotel_02}/>
                          <HotelItem src={hotel_03}/>
                          <HotelItem/>
                          <HotelItem/>
                    </div>

                  </div>

                </div>

              </div>

            </div>

        )
    }



    constructor(props){
      super(props)
      this.state = {
          selectedDate : new Date('2014-08-18T21:11:54')
      }
  }

  handleDateChange(newDate){
      this.setState({
          selectedDate : newDate
      })
  }


}



const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}


