
import React from 'react';
import './Header.css'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as Cancel } from '../../assets/icons/cancel.svg';
import { NavLink } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SignUpIcon from '@material-ui/icons/PersonAdd';


class Header extends React.Component {

    render() { 
        return (  
            <div>
                <header id="main_header" className="header_container">

                    <div className="navbar center_vertically">
                        <ul >
                            <li><NavLink to="/search" >Search</NavLink></li>
                            <li><NavLink to="/about" >About</NavLink></li>
                            <li><NavLink to="/contact" >Contact</NavLink></li>
                            <li>Login</li>
                            <li onClick={()=>this.handleClickOpen()}>Sign up</li>
                        </ul>
                    </div>
                </header>
                
                <div id="web_title" className="website_title">
                    <NavLink to="/" >Berno Hotels</NavLink>
                </div>
                {this.chooseIconToDisplay()}


                <Dialog open={this.state.signUpFormState} onClose={()=>this.handleClose()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" className="text_align_center">Sign up</DialogTitle>

                    <IconButton aria-label="close" className="close_button" onClick={()=>this.handleClose()}>
                        <CloseIcon />
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
                            <SignUpIcon className="search_icon">send</SignUpIcon>
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
                            label="Yes, please inform me about travel deals, tips and new features on TripAdvisor. I can opt out at any time."
                        />

                    </DialogContent>
  
                </Dialog>

            </div>
            
        )
    }


    constructor(props){
        super(props)
        this.state ={
            headerState : "hidden",
            signUpFormOpen : false
        }
    }


    handleClickOpen(){
        this.setState({
            signUpFormState : true
        })
    }

    handleClose(){
        console.log('CLOSE')
        this.setState({
            signUpFormState : false 
        })
    }

    chooseIconToDisplay(){
        if(this.state.headerState === 'visible'){
            return (
                <Cancel id="menu_icon" className="menu_icon" onClick={()=>this.hideOrShowHeader()}/>
            )
        }else{
            return (
                <MenuIcon id="menu_icon" className="menu_icon" onClick={()=>this.hideOrShowHeader()}/>
            )
        }
    }


    hideOrShowHeader(){
        let header = document.getElementById("main_header")
        let websiteTitle = document.getElementById("web_title")
        let menuIcon = document.getElementById("menu_icon")
        
        if(this.state.headerState === 'hidden'){
            header.setAttribute('style', 'transform : translateY(80px)')
            websiteTitle.setAttribute('style', 'color : #000000')
            menuIcon.setAttribute('style', 'fill : #000000')

            this.setState({
                headerState : "visible"
            })
        }else{
            header.setAttribute('style', 'transform : translateY(-80px)')
            websiteTitle.setAttribute('style', 'color : #ffffff')
            menuIcon.setAttribute('style', 'fill : #ffffff')

            this.setState({
                headerState : "hidden"
            })
        }


    }

}
 
export default Header