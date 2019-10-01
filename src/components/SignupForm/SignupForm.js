import React from 'react'
import './SignupForm.css'

import {
    TextField, 
    Button, 
    Checkbox, 
    IconButton, 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    FormControlLabel

} from '@material-ui/core'

import { Close as CloseIcon, PersonAdd as SignupIcon } from '@material-ui/icons'



export default class SignupForm extends React.Component{

    render(){
        return (

                <Dialog open={this.props.open} onClose={this.props.handleClose} onBackdropClick={this.props.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" className="text_align_center">Sign up</DialogTitle>

                    <IconButton aria-label="close" className="close_button" onClick={this.props.handleClose}>
                        <CloseIcon/>
                    </IconButton>

                    <DialogContent>

                        <DialogContentText className="text_align_center">
                            Sign up now, it's FREE !
                        </DialogContentText>

                        <div className="signup_inputs_container">
                            <TextField
                                id="outlined-name"
                                label="@Email address"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="email"
                            />

                            <TextField
                                id="outlined-name"
                                label="Create a password"
                                className="spaced_element"
                                margin="normal"
                                variant="outlined"
                                type="password"
                            />
                        </div>

                        
                        <Button variant="contained" color="primary" className="signup_button">
                            Sign up
                            <SignupIcon className="search_icon">send</SignupIcon>
                        </Button>


                        <DialogContentText className="text_align_center">
                            Already have an account ? Login
                        </DialogContentText>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={true}
                                onChange={()=>console.log('checkChange')}
                                value="checkedB"
                                color="primary"
                            />
                            }
                            label="Yes, please inform me about travel deals, tips and new features on Berno Hotels. I can opt out at any time."
                        />

                    </DialogContent>

                </Dialog>
        )
    }

    constructor(props){
        super(props)
    }
}