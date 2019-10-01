
import React from 'react';
import './Header.css'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as Cancel } from '../../assets/icons/cancel.svg';
import { NavLink, withRouter } from 'react-router-dom'
import SignupForm from '../SignupForm/SignupForm'
import { Button } from '@material-ui/core'


class Header extends React.Component {

    render() { 
        return (  
            <div>
                <header id="main_header" className="header_container">

                    <div className="navbar center_vertically">
                        <ul >
                            <li><NavLink to="/search" >Search</NavLink></li>
                            <li><NavLink to="/submit" >Submit</NavLink></li>
                            <li><NavLink to="/about" >About</NavLink></li>
                            <li><NavLink to="/contact" >Contact</NavLink></li>
                            <li>Login</li>
                            <li onClick={()=>this.handleClickOpen()}>
                                <Button variant="contained" color="primary">
                                    Sign up
                                </Button>
                            </li>
                        </ul>
                    </div>
                </header>
                
                <div className="fixed_title_icon">
                    <div id="web_title" className="website_title">
                        <NavLink to="/" >Berno Hotels</NavLink>
                    </div>
                    {this.chooseIconToDisplay()}
                </div>

                <SignupForm open={this.state.signUpFormOpen} handleClose={this.handleClose}/>

            </div>
            
        )
    }

    constructor(props){
        super(props)
        this.state = {
            headerState : "hidden",
            signUpFormOpen : false
        }
    }

    handleClickOpen(){
        this.setState({
            signUpFormOpen : true
        })
    }

    handleClose = ()=>{
        this.setState({
            signUpFormOpen : false 
        })
    }

    componentDidMount(){
        let header = document.getElementById("main_header")
        let websiteTitle = document.getElementById("web_title")

        header.setAttribute('style', 'transform : translateY(80px)')
        websiteTitle.setAttribute('style', 'color : #000000')

        this.setState({
            headerState : "visible"
        })
    }



    /*-------------------TO CLEAN--------------------*/ 

    chooseIconToDisplay(){
        if(this.props.location.pathname === '/'){
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
    }


    showHeader(){
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
 
export default withRouter(Header)