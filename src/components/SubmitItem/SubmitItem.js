import React from 'react'
import './SubmitItem.css'
import {DropzoneDialog} from 'material-ui-dropzone'

import { TextField, 
    Button, 
  } from '@material-ui/core'

import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';



export default class SubmitItem extends React.Component{


    render() {
        return (
            <div className="submit_form_container">

                <form className="submit_form">

                    <fieldset>
                        <legend>General</legend>
                        <div className="section_container">
                            <TextField
                                id="property_name"
                                label="Property Name"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="proprty_number_of_stars"
                                label="Stars"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </fieldset>


                    <fieldset>
                        <legend>Contact information</legend>
                        <div className="owner_information section_container">
                            <TextField
                                id="owner_fullname"
                                label="Contact name"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="owner_email"
                                label="@Email"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="email"
                            />
                            <TextField
                                id="owner_phone_number"
                                label="#Phone"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="number"
                            />
                            <TextField
                                id="owner_alternative_phone_number"
                                label="Alternative #Phone"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="number"
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Locate your property</legend>
                            <div className="location_inputs section_container">

                                <TextField
                                    id="property_address"
                                    label="Address"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <TextField
                                    id="property_address_2"
                                    label="Address 2"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <TextField
                                    id="property_zipcode"
                                    label="Zip Code"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <div>
                            
                                <TextField
                                    id="property_country"
                                    label="Country"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <TextField
                                    id="property_state"
                                    label="State / Province / Region"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <TextField
                                    id="property_city"
                                    label="City"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                />

                            </div>

                        </div>
                    </fieldset>


                    <fieldset>
                        <legend>Details</legend>
                        <div className="section_container">
                            <TextField
                                id="property_services"
                                label="Services"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="property_facilities"
                                label="Facilities"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="property_number_of_rooms"
                                label="Number of rooms"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="number"
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Display your property</legend>
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


                    <Button variant="contained" color="primary" className="spaced_element arrow_submit_button">
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
            open: false,
            files: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        this.setState({
            files: files, 
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

}