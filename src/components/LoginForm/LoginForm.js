import React from 'react'
import './LoginForm.css'
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
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons'



export default class LoginForm extends React.Component{

    render(){
        return(
            <Dialog open={this.props.open} onClose={this.props.handleClose} onBackdropClick={this.props.handleClose}>
            <DialogTitle id="form-dialog-title" className="text_align_center">Sign up</DialogTitle>

            <IconButton title="close" className="close_button" onClick={this.props.handleClose}>
                <CloseIcon/>
            </IconButton>

            <DialogContent>

                <DialogContentText className="text_align_center">
                    Login
                </DialogContentText>

                <div className="signup_inputs_container">
                    <TextField
                        required
                        error={this.state.errorState.email}
                        id="signup_email"
                        label="@Email address"
                        className="spaced_element"
                        margin="normal"
                        variant="outlined"
                        type="email"
                        onChange={(event)=>this.handleEmailChange(event.target.value)}
                    />


                    <div>
                        <PasswordHelpPopover/>
                    </div>

                    <TextField
                        required
                        error={this.state.errorState.password}
                        id="signup_password"
                        label="Create a password"
                        className="spaced_element"
                        margin="normal"
                        variant="outlined"
                        type="password"
                        onChange={(event)=>this.handlePasswordChange(event.target.value)}
                    />
                </div>

                <Button variant="contained" color="primary" className="login_button">
                    Login
                    <ArrowForward className="icon_left"/>
                </Button>

            </DialogContent>

        </Dialog>
        )
    }
}