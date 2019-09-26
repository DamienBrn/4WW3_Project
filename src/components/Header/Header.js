
import React from 'react';
import './Header.css'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as Cancel } from '../../assets/icons/cancel.svg';
import { NavLink } from 'react-router-dom'


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
                            <li>Sign up</li>
                        </ul>
                    </div>
                </header>
                
                <div id="web_title" className="website_title">
                    <NavLink to="/" >Berno Hotels</NavLink>
                </div>
                {this.chooseIconToDisplay()}
            </div>
        )
    }


    constructor(props){
        super(props)
        this.state ={
            headerState : "hidden"
        }
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