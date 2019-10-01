import React from 'react'
import './SubmitItem.css'
import {DropzoneDialog} from 'material-ui-dropzone'

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

import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';



export default class SubmitItem extends React.Component{


    render() {
        return (
            <div className="submit_form_container">

                <form>

                    <div className="section_container">
                        <TextField
                            id="outlined-name"
                            label="Property Name"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-name"
                            label="Stars"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>


                    <div className="contact_information section_container">
                        <TextField
                            id="outlined-name"
                            label="Contact name"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="@Email"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="#Tel"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="Alternative #Tel"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <div className="location_inputs section_container">

                        <TextField
                            id="outlined-name"
                            label="Address"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-name"
                            label="Address 2"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-name"
                            label="Zip Code"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />

                        <div>

                            <TextField
                                id="outlined-name"
                                label="Country"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-name"
                                label="State / Province / Region"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-name"
                                label="City"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                            />

                        </div>

                    </div>

                    <div className="section_container">
                        <TextField
                            id="outlined-name"
                            label="Services"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="Facilities"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-name"
                            label="Number of rooms"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

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
        //Saving files to state for further use and closing Modal.
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