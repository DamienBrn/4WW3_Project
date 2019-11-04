import React from 'react'
import './SubmitItem.css'
import {DropzoneDialog} from 'material-ui-dropzone'

import { 
    TextField, 
    Button, 
    Select, 
    InputLabel, 
    FormControl, 
    MenuItem, 
    FormControlLabel,
    Checkbox
  } from '@material-ui/core'
  import { 
    RateReview as GeneralIcon,
    ContactMail as ContactMailIcon, 
    LocationCity as LocationCityIcon, 
    Description as DescriptionIcon,
    PhotoLibrary as PhotoLibraryIcon
} from '@material-ui/icons'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Rating from '@material-ui/lab/Rating';
import MapInteractive from '../MapInteractive/MapInteractive'
import api from '../../../backend/services/api'


export default class SubmitItem extends React.Component{


    render() {
        return (
            <div className="submit_form_container">

                <form className="submit_form" onSubmit={(event)=>this.handleSubmit(event)}>

                    <fieldset>
                        <legend><GeneralIcon/>  General</legend>
                        <div className="section_container flex_align_row">
                            <TextField
                                required
                                name="name"
                                id="property_name"
                                label="Property Name"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                onChange={(event)=>this.handleChange(event)}
                            />

                            <FormControl variant="outlined" className="spaced_element star_picker">
                                <InputLabel  htmlFor="stars">
                                    Number of stars
                                </InputLabel>
                                <Select
                                    required
                                    labelWidth={500}
                                    value={this.state.stars}
                                    onChange={(event)=>this.handleChange(event)}
                                    inputProps={{
                                        name: 'stars',
                                        id: 'stars',
                                    }}
                                >
                                    <MenuItem value={1}>
                                        1 Star <Rating value={1} readOnly/>
                                    </MenuItem>
                                    <MenuItem value={2}>
                                        2 Stars <Rating value={2} readOnly/>
                                    </MenuItem>
                                    <MenuItem value={3}>
                                        3 Stars <Rating value={3} readOnly/>
                                    </MenuItem>
                                    <MenuItem value={4}>
                                        4 Stars <Rating value={4} readOnly/>
                                    </MenuItem>
                                    <MenuItem value={5}>
                                        5 Stars <Rating value={5} readOnly/>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </fieldset>


                    <fieldset>
                        <legend><ContactMailIcon/>  Contact information</legend>
                        <div className="owner_information section_container">
                            <TextField
                                required
                                name="contactName"
                                id="owner_fullname"
                                label="Contact name"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                onChange={(event)=>this.handleChange(event)}
                            />
                            <TextField
                                required
                                error={this.state.errorState.email}
                                name="email"
                                id="owner_email"
                                label="@Email"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="email"
                                onChange={(event)=>this.handleInputChangeCheck(event)}
                            />
                            <TextField
                                required
                                name="phone"
                                error={this.state.errorState.phone}
                                id="owner_phone_number"
                                label="#Phone"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="tel"
                                onChange={(event)=>this.handleInputChangeCheck(event)}
                            />
                            <TextField
                                name="altPhone"
                                error={this.state.errorState.altPhone}
                                id="owner_alternative_phone_number"
                                label="Alternative #Phone"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="tel"
                                onChange={(event)=>this.handleInputChangeCheck(event)}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend><LocationCityIcon/>  Locate your property</legend>
                            <div className="location_inputs section_container">
                                <div className="flex_align_row">
                                    <TextField
                                        required
                                        name="address"
                                        id="property_address"
                                        label="Address"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(event)=>this.handleChange(event)}
                                    />
                                    <TextField
                                        name="address2"
                                        id="property_address_2"
                                        label="Address 2"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(event)=>this.handleChange(event)}
                                    />

                                    <TextField
                                        required
                                        name="zipCode"
                                        id="property_zipcode"
                                        label="Zip Code"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(event)=>this.handleChange(event)}
                                    />
                                </div>

                                <div className="flex_align_row">
                            
                                    <TextField
                                        required
                                        name="countryCode"
                                        id="property_countryCode"
                                        label="Country"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(event)=>this.handleChange(event)}
                                    />

                                    <TextField
                                        required
                                        name="state"
                                        id="property_state"
                                        label="State / Province / Region"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(event)=>this.handleChange(event)}
                                    />

                                    <TextField
                                        required
                                        name="city"
                                        id="property_city"
                                        label="City"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(event)=>this.handleChange(event)}
                                    />

                                </div>

                            <div>
                                <h3>Click on the map to locate your property...</h3>
                                <div className="map_i_container">
                                    <MapInteractive handleClickOnMap={this.handleClickOnMap} selectedPosition={this.state.selectedPosition}/>
                                </div>
                                
                                <h3>...or enter the values manually</h3>
                                <div className="flex_align_row">
                                    <TextField
                                        required
                                        name="lat"
                                        id="lat"
                                        label="Latitude"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.selectedPosition.lat}
                                        onChange={(event)=>this.handleLocationChange(event.target.value, 'lat')}
                                    />
                                    <TextField
                                        required
                                        name="lng"
                                        id="lng"
                                        label="Longitude"
                                        className="spaced_element"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.selectedPosition.lng}
                                        onChange={(event)=>this.handleLocationChange(event.target.value, 'lng')}
                                    />
                                </div>
                            </div>

                        </div>
                    </fieldset>


                    <fieldset>
                        <legend><DescriptionIcon/>  Details</legend>
                        <div className="section_container flex_align_row">
                            <div>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.services.airportShuttle}
                                            name="airportShuttle"
                                            onClick={(event)=>this.handleChangeServices(event)}
                                            value={this.state.services.airportShuttle}
                                            color="primary"
                                        />
                                    }
                                    label="Airport shuttle"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.services.wifi}
                                            name="wifi"
                                            onClick={(event)=>this.handleChangeServices(event)}
                                            value={this.state.services.wifi}
                                            color="primary"
                                        />
                                    }
                                    label="Wifi"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.services.breakfast}
                                            name="breakfast"
                                            onClick={(event)=>this.handleChangeServices(event)}
                                            value={this.state.services.breakfast}
                                            color="primary"
                                        />
                                    }
                                    label="Breakfast"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.services.smokeFree}
                                            name="smokeFree"
                                            onClick={(event)=>this.handleChangeServices(event)}
                                            value={this.state.services.smokeFree}
                                            color="primary"
                                        />
                                    }
                                    label="Smoke-free"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.services.bar}
                                            name="bar"
                                            onClick={(event)=>this.handleChangeServices(event)}
                                            value={this.state.services.bar}
                                            color="primary"
                                        />
                                    }
                                    label="Bar"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.services.deck}
                                            name="deck"
                                            onClick={(event)=>this.handleChangeServices(event)}
                                            value={this.state.services.deck}
                                            color="primary"
                                        />
                                    }
                                    label="Deck"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.services.restaurant}
                                            name="restaurant"
                                            onClick={(event)=>this.handleChangeServices(event)}
                                            value={this.state.services.restaurant}
                                            color="primary"
                                        />
                                    }
                                    label="Restaurant"
                                />
                            </div>
                            <TextField
                                required
                                name="nbOfRooms"
                                id="property_number_of_rooms"
                                label="Number of rooms"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="number"
                                inputProps={{ min: "0"}} 
                                onChange={(event)=>this.handleChange(event)}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend><PhotoLibraryIcon/>  Display your property</legend>
                        <div>
                            <Button onClick={()=>this.handleOpen()}>
                                Add file(s)
                            </Button>
                            <DropzoneDialog
                                open={this.state.open}
                                onSave={()=>this.handleSave()}
                                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp', 'video/*']}
                                showPreviews={true}
                                maxFileSize={25000000}
                                onClose={()=>this.handleClose()}
                                dropzoneClass="dropzone_files"
                                dropzoneText="Drag and drop a file or click here"
                            />
                        </div>
                    </fieldset>


                    <div className="error_messages_section">
                                {this.state.errorMessage}
                    </div>

                    <Button type="submit" variant="contained" color="primary" className="spaced_element arrow_submit_button">
                      Continue
                      <ArrowForwardOutlinedIcon className="icon_right"/>
                    </Button>


                </form>


            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            stars : 1,
            contactName : '',
            email : '',
            phone : '',
            altPhone : '',
            address : '',
            address2 : '',
            zipCode : '',
            countryCode : '',
            state : '',
            city : '',
            selectedPosition : {
                lat : 0,
                lng : 0
            },
            services : {
                airportShuttle : false,
                wifi : false,
                breakfast : false,
                smokeFree : false,
                bar : false,
                deck : false,
                restaurant : false
            },
            nbOfRooms : '',
            files: [],
            errorState : {
                email : false,
                phone : false,
                altPhone : false
                },
            errorMessage : '',
            open: false,
        };
    }

    //Closes the window for dropping files
    handleClose() {
        this.setState({
            open: false
        });
    }

    //Saves imported files to the state
    handleSave(files) {
        this.setState({
            ...this.state,
            files: files, 
            open: false
        });
    }

    //Controls the window for dropping files
    handleOpen() {
        this.setState({
            open: true,
        });
    }

    //General method to handle the changes to a service checkbox
    handleChangeServices(event){
        console.log(this.state.services[event.target.name])
        this.setState({
            ...this.state,
            services : {
                ...this.state.services,
                [event.target.name]: !this.state.services[event.target.name]
            }
        })
    }

    //General method to handle the changes to an input value
    handleChange(event){
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    //We check the values for the inputs that needs a specific syntax for their values (only 3 in our case)
    handleInputChangeCheck(event){
        let name = event.target.name
        let value = event.target.value
        let regex = /\S+@\S+\.\S+/; //we initiate the regex for the email (as the user will logically fill out inputs in the display order)

        //If the name of the event is "phone" or "altPhone" we set the regex for the phone numbers
        if(name === "phone" || name === "altPhone"){
            regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
        }

        //if the regex is validated we update the new values into the state and set the errorState of the input to false
        if(regex.test(value)){
            this.setState({
                ...this.state,
                [name] : value,
                errorState : {
                    ...this.state.errorState,
                    [name] : false
                }
            })
        //if the regex is not validated, we set the errorState of the input to true
        }else{
            this.setState({
                ...this.state,
                errorState : {
                    ...this.state.errorState,
                    [name] : true
                }
            })
        }
    }

    handleSubmit = async(event)=>{
        event.preventDefault();
        let nbErrorState = 0
        //We check if one of the input is in the error state
        for(let element in this.state.errorState){
            if(this.state.errorState[element]){
                nbErrorState++
            }
        }

        //We one or more inputs or in the error state, we display an error message and prevent the user from submitting
        if(nbErrorState > 0){
            this.displayErrorMessage()
        }else{
            this.setState({
                ...this.state,
                errorMessage : ''
            })

            let {name, countryCode, city, address, address2, stars, zipCode, services} = this.state
            const payload = {name, countryCode, city, address, address2, stars, zipCode, services}
            await api.insertHotel(payload).then((hotel)=>{
            })
        }
        
      }


      //We update the state to display an error message
      displayErrorMessage(){
        this.setState({
            ...this.state,
            errorMessage : '*Please enter correct values.'
        })
      }


      //When we click on the map, we get the location of the click and map component to update the position and the view
      handleClickOnMap=(location, map)=>{
        this.setState({
            ...this.state,
            selectedPosition : {
                ...this.state.selectedPosition,
                lat :  location.lat(),// We get the latitude from the clicked position
                lng : location.lng()// We get the longitude from the clicked position
            }
        })
        map.panTo(location); //We center the view on the clicked position
    }

    //We update the state with the new latitude and longitude
    handleLocationChange(value, key){
        this.setState({
            ...this.state,
            selectedPosition:{
                ...this.state.selectedPosition,
                [key] : value
            }
        })
    }

}