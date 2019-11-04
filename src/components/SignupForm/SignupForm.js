import React from 'react'
import './SignupForm.css'
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter'

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
import { Close as CloseIcon, PersonAdd as SignupIcon} from '@material-ui/icons'
import api from '../../services/api'
import PasswordHelpPopover from './PasswordHelpPopover/PasswordHelpPopover'



export default class SignupForm extends React.Component{

    render(){
        return (
                <Dialog open={this.props.open} onClose={()=>this.props.handleClose('signUpFormOpen')} onBackdropClick={()=>this.props.handleClose('signUpFormOpen')}>
                    <DialogTitle id="form-dialog-title" className="text_align_center">Sign up</DialogTitle>

                    <IconButton title="close" className="close_button" onClick={()=>this.props.handleClose('signUpFormOpen')}>
                        <CloseIcon/>
                    </IconButton>

                    <DialogContent>

                        <DialogContentText className="text_align_center">
                            Sign up now, it's FREE !
                        </DialogContentText>

                        <form onSubmit={(event)=>this.handleSubmit(event)}>

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

                                <div className="password_container">
                                    <TextField
                                        required
                                        error={this.state.errorState.password}
                                        id="signup_password"
                                        label="Create a password"
                                        className="spaced_element password_input"
                                        margin="normal"
                                        variant="outlined"
                                        type="password"
                                        onChange={(event)=>this.handlePasswordChange(event.target.value)}
                                    />

                                    <PasswordStrengthMeter password={this.state.password}/>
                                </div>
                            </div>

                            <div className="error_messages_section">
                                {this.state.errorMessage}
                            </div>

                            <Button type="submit" variant="contained" color="primary" className="signup_button">
                                Sign up
                                <SignupIcon className="icon_left"/>
                            </Button>


                            <DialogContentText className="text_align_center already_have_account">
                                <div onClick={()=>{this.props.handleClose('signUpFormOpen'); this.props.handleClickOpen('loginFormOpen')}}>Already have an account ? Login</div>
                            </DialogContentText>


                            <FormControlLabel
                                control={
                                    <Checkbox
                                        required
                                        checked={this.state.checkboxValue.terms}
                                        onClick={()=>this.handleCheckBoxClick('terms')}
                                        value={this.state.checkboxValue.terms}
                                        color="primary"
                                    />
                                }
                                label="I read and accept the terms and conditions  *"
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.checkboxValue.news}
                                        onClick={()=>this.handleCheckBoxClick('news')}
                                        value={this.state.checkboxValue.news}
                                        color="primary"
                                    />
                                }
                                label="Yes, please inform me about travel deals, tips and new features on Berno Hotels. I can opt out at any time."
                            />
                        </form>

                    </DialogContent>

                </Dialog>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            checkboxValue : {
                terms : false,
                news : false
            },
            email : '',
            password :'',
            errorState : {
                email : false,
                password : false
            },
            errorMessage : ''
        }
    }

    //We update the state when a checkbox is clicked
    handleCheckBoxClick(key){
        this.setState({
            ...this.state,
            checkboxValue : {
                ...this.state.checkboxValue,
                [key] : !this.state.checkboxValue[key]
            }
        })
    }

    //We check the email with a regex everytime it changes
    handleEmailChange(email){
        let regex = /\S+@\S+\.\S+/;
        if(regex.test(email)){
            this.setState({
                ...this.state,
                email : email,
                errorState : {
                    ...this.errorState,
                    email : false
                }
            })
        }else{
            this.setState({
                ...this.state,
                errorState : {
                    ...this.errorState,
                    email : true
                }
            })
        }
    }

    //We check the password with a regex everytime it changes
    handlePasswordChange(password){
        let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.,;,])(?=.{8,})/

        
        if(regex.test(password)){
            this.setState({
                ...this.state,
                password : password,
                errorState : {
                    ...this.errorState,
                    password : false
                },
                errorMessage : ''
            })
        }else{
            this.setState({
                ...this.state,
                password : password,
                errorState : {
                    ...this.errorState,
                    password : true
                }
            })
        }
    }

    //We check if the password is correct (if it's not in the error state) and submit the form
    handleSubmit = async(event)=>{
        if(this.state.errorState.password === false){
            const payload = {email : this.state.email, password : this.state.password}
            event.preventDefault();
            await api.insertUser(payload).then((user)=>{
                console.log('user added')
            })
        }else{
            this.displayErrorMessage()
        }
      }

      //We update the state to display an error message when the password does not match the regex
      displayErrorMessage(){
        this.setState({
            ...this.state,
            errorMessage : 'Please enter a valid password.'
        })
      }
}