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


export default class SubmitItem extends React.Component{


    render() {
        return (
            <div className="submit_form_container">

                <form className="submit_form" onSubmit={(event)=>this.handleSubmit(event)}>

                    <fieldset>
                        <legend><GeneralIcon/>  General</legend>
                        <div className="section_container flex_aligne_row">
                            <TextField
                                required
                                name="propertyName"
                                id="property_name"
                                label="Property Name"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                onChange={(event)=>this.handleChange(event)}
                            />

                            <FormControl variant="outlined" className="spaced_element star_picker">
                                <InputLabel  htmlFor="numberOfStars">
                                    Number of stars
                                </InputLabel>
                                <Select
                                    required
                                    labelWidth={500}
                                    value={this.state.numberOfStars}
                                    onChange={(event)=>this.handleChange(event)}
                                    labelWidth={50}
                                    inputProps={{
                                        name: 'numberOfStars',
                                        id: 'numberOfStars',
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
                                    name="addressSecond"
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

                                <div>
                            
                                <TextField
                                    required
                                    name="country"
                                    id="property_country"
                                    label="Country"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event)=>this.handleChange(event)}
                                />

                                <TextField
                                    required
                                    name="region"
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
                                <h3>Click on the map to locate your property :</h3>
                                <div className="map_i_container">
                                    <MapInteractive handleClickOnMap={this.handleClickOnMap} selectedPosition={this.state.selectedPosition}/>
                                </div>
                                
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
                    </fieldset>


                    <fieldset>
                        <legend><DescriptionIcon/>  Details</legend>
                        <div className="section_container flex_aligne_row">
                            <TextField
                                required
                                name="services"
                                id="property_services"
                                label="Services"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                onChange={(event)=>this.handleChange(event)}
                            />
                            <TextField
                                required
                                name="facilities"
                                id="property_facilities"
                                label="Facilities"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                onChange={(event)=>this.handleChange(event)}
                            />

                            <TextField
                                required
                                name="numberOfRooms"
                                id="property_number_of_rooms"
                                label="Number of rooms"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="number"
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
                      <ArrowForwardOutlinedIcon className="arrow_submit_icon"/>
                    </Button>


                </form>


            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            propertyName : '',
            numberOfStars : 1,
            contactName : '',
            email : '',
            phone : '',
            altPhone : '',
            address : '',
            addressSecond : '',
            zipCode : '',
            country : '',
            region : '',
            city : '',
            selectedPosition : {
                lat : 0,
                lng : 0
            },
            services : '',
            facilities : '',
            numberOfRooms : '',
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

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        this.setState({
            ...this.state,
            files: files, 
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    handleChange(event){
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleInputChangeCheck(event){
        let name = event.target.name
        let value = event.target.value
        let regex = /\S+@\S+\.\S+/;

        if(name === "phone" || name === "altPhone"){
            regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
        }

        if(regex.test(value)){
            this.setState({
                ...this.state,
                [name] : value,
                errorState : {
                    ...this.state.errorState,
                    [name] : false
                }
            })
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

    handleSubmit=(event)=>{
        let nbErrorState = 0

        for(let element in this.state.errorState){
            if(this.state.errorState[element]){
                nbErrorState++
            }
        }

        if(nbErrorState > 0){
            this.displayErrorMessage()
        }else{
            this.setState({
                ...this.state,
                errorMessage : ''
            })
            alert("Success ! ")
        }
        event.preventDefault();
      }

      displayErrorMessage(){
        this.setState({
            ...this.state,
            errorMessage : '*Please enter correct values.'
        })
      }

      handleClickOnMap=(location, map)=>{
        this.setState({
            ...this.state,
            selectedPosition : {
                ...this.state.selectedPosition,
                lat :  location.lat(),
                lng : location.lng()
            }
        })
        map.panTo(location);
    }

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