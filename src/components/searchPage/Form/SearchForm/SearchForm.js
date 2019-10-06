import React from 'react'
import './SearchForm.css'
import { TextField, 
  Box, 
  Button, 
  Select, 
  InputLabel, 
  FormControl, 
  Typography, 
  MenuItem, 
  Slider
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SearchIcon from '@material-ui/icons/Search';
import Rating from '@material-ui/lab/Rating';



export default class SearchForm extends React.Component{
    render(){
        return (
            <div className="search_form_container">

              <div className="search_layout_container">

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
                          id="date_picker_arrival"
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
                          id="date_picker_departure"
                          label="Date picker inline"
                          value={this.state.selectedDate}
                          onChange={()=>this.handleDateChange()}
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
                        value={"test"}
                       /* onChange={}
                        labelWidth={}*/
                        inputProps={{
                          name: 'adults',
                          id: 'number_adults',
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
                        <InputLabel  htmlFor="number_children">
                          Children
                        </InputLabel>
                        <Select
                          value={"test"}
                        /* onChange={}
                          labelWidth={}*/
                          inputProps={{
                            name: 'children',
                            id: 'number_children',
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
                        <InputLabel  htmlFor="number_rooms">
                          Rooms
                        </InputLabel>
                        <Select
                          value={"test"}
                        /* onChange={}
                          labelWidth={}*/
                          inputProps={{
                            name: 'age',
                            id: 'number_rooms',
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
                        name="number_stars"
                        value={2}
                        /*onChange={(event, newValue) => {
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
          selectedDate : new Date('2014-08-18T21:11:54')
      }
  }

  handleDateChange(newDate){
      this.setState({
          selectedDate : newDate
      })
  }
}


/*-----------------------Styles imported from @material-ui for the AirBnB Slider-------------------------------*/ 

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


