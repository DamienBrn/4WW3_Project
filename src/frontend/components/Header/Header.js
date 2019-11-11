
import React from 'react';
import './Header.css'
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import { ReactComponent as Cancel } from '../../../assets/icons/cancel.svg';
import { Button } from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom'
import SignupForm from '../SignupForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import {
    AccountCircle as AccountCircleIcon
}from '@material-ui/icons'
import api from '../../../backend/services/api'
import FlagIcon from '../FlagIcon/FlagIcon'

class Header extends React.Component {

    render() { 
        return (  
            <div>
                <header id="main_header" className="header_container">

                    <div className="navbar center_vertically">
                        <ul className="align_flex" >
                            <li><NavLink to="/search" className="link_menu" >Search</NavLink></li>
                            <li><NavLink to="/submit" className="link_menu">Submit</NavLink></li>
                            <li><NavLink to="/about" className="link_menu">About</NavLink></li>
                            <li><NavLink to="/contact" className="link_menu">Contact</NavLink></li>
                            {localStorage.getItem('user') ? <li onClick={()=>this.logout()}>Logout</li> : <li onClick={()=>this.handleClickOpen('loginFormOpen')}>Login</li>}
                            {localStorage.getItem('user') ? <li className="user_profile_picture_header_container"><AccountCircleIcon className="user_profile_picture_header"/><FlagIcon code={this.state.user.countryCode} className="flag_header" /><span>{this.state.user.firstName}</span></li> : 
                                <li onClick={()=>this.handleClickOpen('signUpFormOpen')}>
                                    <Button variant="contained" color="primary">
                                        Sign up
                                    </Button>
                                </li>
                            }
                            
                        </ul>
                    </div>

                </header>
                
                <div id="fixed_webtitle_menuicon" className="fixed_webtitle_menuicon">

                    <div id="website_title" className="website_title">
                        <NavLink to="/" >Berno Hotels</NavLink>
                    </div>
                    {this.chooseIconToDisplay()}

                </div>

                <SignupForm open={this.state.signUpFormOpen} handleClose={this.handleClose} handleClickOpen={this.handleClickOpen}/>
                <LoginForm open={this.state.loginFormOpen} handleClose={this.handleClose}/>

            </div>
            
        )
    }

    constructor(props){
        super(props)
        this.state = {
            headerState : "closed",
            signUpFormOpen : false,
            loginFormOpen : false,
            user : {}
        }
    }

    componentDidMount(){
        this.initHeaderOpen()
        this.initEventListeners()
        this.checkIfNeedToDisplayUser()
    }

    componentDidUpdate(){
        this.updateHeaderColorsOnUpdate()
    }

    initHeaderOpen(){
        let header = document.getElementById("main_header")

        header.setAttribute('style', 'transform : translateY(80px)')
        this.setState({
            headerState : "open"
        })
    }

    initEventListeners(){
        window.addEventListener("resize", ()=>{this.updateHeaderOnResize()});
    }


    checkIfNeedToDisplayUser(){
        if(localStorage.getItem('user')){
            this.loadUserInfo()
        }
    }

    loadUserInfo = async() =>{
        let userId = JSON.parse(localStorage.getItem('user'))
        await api.getUserById(userId).then((response)=>{
            this.setState({
                ...this.state,
                user : response.data
            })
        })
    }


    chooseIconToDisplay(){
        let windowWidth = window.innerWidth

        if(this.props.location.pathname.length === 1 || windowWidth <= 930){
            if(this.state.headerState === 'open'){
                return (
                    <Cancel id="menu_icon" className="menu_icon" onClick={()=>this.hideOrShowHeader()}/>
                )
            }else{
                return (
                    <MenuIcon id="menu_icon" className="menu_icon" onClick={()=>this.hideOrShowHeader()}/>
                )
            }
        }else if(windowWidth > 930){
            return(
                <div></div>
            )
        }
    }

    updateHeaderColorsOnUpdate(){
        if(this.state.headerState === 'closed' && this.props.location.pathname.length === 1){

            let menuIcon = document.getElementById("menu_icon")
            menuIcon.setAttribute('style', 'fill : #ffffff !important')

        }else{
            let iconsTitleContainer = document.getElementById('fixed_webtitle_menuicon')
            iconsTitleContainer.setAttribute('style', 'border-bottom: solid 1px #686868;')
        }
    }

    updateHeaderOnResize(){
        setTimeout(()=>{
            let header = document.getElementById("main_header")
            let headerHeight = header.clientHeight
            
            if(headerHeight > 80 && this.state.headerState !== 'open'){
                header.setAttribute('style', 'transition: all ease 0s; top : -' + headerHeight +'px;' )
            }
        }, 200)
    }

    hideOrShowHeader(){
        let header = document.getElementById("main_header")
        let websiteTitle = document.getElementById("website_title")
        let menuIcon = document.getElementById("menu_icon")
        let headerHeight = header.clientHeight


        if(this.state.headerState === 'closed'){
            header.setAttribute('style', 'transform : translateY(' + 80 + 'px);')
            websiteTitle.setAttribute('style', 'color : #000000;')
            menuIcon.setAttribute('style', 'fill : #000000;')

            this.setState({
                headerState : "open"
            })
        }else{
            header.setAttribute('style', 'transform : translateY(-' + headerHeight + 'px);')

            if(this.props.location.pathname.length === 1){
                websiteTitle.setAttribute('style', 'color : #ffffff;')
                menuIcon.setAttribute('style', 'fill : #ffffff;')
            }
            this.setState({
                headerState : "closed"
            })
        }
    }

    handleClickOpen=(key)=>{
        this.setState({
            [key] : true
        })
    }

    handleClose = (key)=>{
        this.setState({
            [key] : false 
        })
    }

    logout(){
        this.setState({...this.state})
        localStorage.clear()
        window.location.reload()  
    }
}
export default withRouter(Header)