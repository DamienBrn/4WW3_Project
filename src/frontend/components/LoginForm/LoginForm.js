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
import { ArrowForward as ArrowForwardIcon,  Close as CloseIcon } from '@material-ui/icons'
import api from '../../../backend/services/api'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';


class LoginForm extends React.Component{

    render(){
        return(
            <Dialog open={this.props.open} onClose={()=>this.props.handleClose('loginFormOpen')} onBackdropClick={()=>this.props.handleClose('loginFormOpen')}>
            <DialogTitle id="form-dialog-title" className="text_align_center">Login</DialogTitle>

            <IconButton title="close" className="close_button" onClick={()=>this.props.handleClose('loginFormOpen')}>
                <CloseIcon/>
            </IconButton>

            <DialogContent>

                <DialogContentText className="text_align_center">
                    Login
                </DialogContentText>

                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <div className="signup_inputs_container">
                        <TextField
                            required
                            name = "email"
                            id="login_email"
                            label="@Email address"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                            type="email"
                            onChange={(event)=>this.handleChange(event)}
                        />

                        <TextField
                            required
                            name="password"
                            id="login_password"
                            label="Password"
                            className="spaced_element"
                            margin="normal"
                            variant="outlined"
                            type="password"
                            onChange={(event)=>this.handleChange(event)}
                        />
                    
                    
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.checkboxValue}
                                    onClick={()=>this.handleCheckBoxClick()}
                                    value={this.state.checkboxValue}
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                    </div>

                    <Button type="submit" variant="contained" color="primary" className="login_button">
                        Login
                        <ArrowForwardIcon className="icon_right"/>
                    </Button>
                </form>

            </DialogContent>

        </Dialog>
        )
    }


    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };

    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            remindMe : false
        }
    }

    //We update the state when a checkbox is clicked
    handleCheckBoxClick(){
        this.setState({
            ...this.state,
            remindMe : !this.state.remindMe
        })
    }

    //General method to handle the changes to an input value
    handleChange(event){
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = async(event)=>{
        event.preventDefault();

        const {email, password} = this.state

        await api.getUserByEmail(email).then((user)=>{
            this.processLogin(user.data, password)
        })
      }


      processLogin(userData, password){
          console.log(this.props)
        const { cookies } = this.props

        if(userData == null || userData.password !== password){
            alert('wrong info')
        }else{
            sessionStorage.setItem('user', userData._id)
            cookies.set('test', 54)
            //if(this.state.remindMe){
                localStorage.setItem('user', JSON.stringify(userData._id))
            //}
            this.props.handleClose('loginFormOpen')
            window.location.reload()            
        }
      }
}   

export default withCookies(LoginForm)