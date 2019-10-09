import React from 'react'
import {
    Typography,
    Popover
} from '@material-ui/core'
import {Help as HelpIcon } from '@material-ui/icons'


export default class PasswordHelpButton extends React.Component{
    
    render(){
        return(

            <div>
                <HelpIcon aria-describedby="password_help_popover"  className="popover_help_icon" onClick={(event)=>this.popoverHandleClick(event)}/>
                <Popover
                        id="password_help_popover"
                        className="password_help_popover"
                        open={this.state.openPopover}
                        anchorEl={this.state.anchorEl}
                        onClose={()=>this.popoverHandleClose()}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Typography className="typo_popover">
                            <div>
                                <strong>Password must contains :</strong>
                                <ul>
                                    <li>at least 8 characters</li>
                                    <li>at least 1 lowercase character</li>
                                    <li>at least 1 uppercase character</li>
                                    <li>at least 1 number</li>
                                    <li>at least 1 symbol</li>
                                </ul>
                            </div>
                        </Typography>

                </Popover>
            </div>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            openPopover : false,
            anchorEl : null
        }
    }

    popoverHandleClick(event){
        this.setState({
            ...this.state,
            openPopover : true,
            anchorEl : event.target
        })
    }

    popoverHandleClose(){
        this.setState({
            ...this.state,
            openPopover : false,
            anchorEl : null
        })
    }
}