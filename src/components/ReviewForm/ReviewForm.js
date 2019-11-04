import React from 'react'
import './ReviewForm.css'

import {
    TextField, 
    Button, 
    IconButton, 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    Box
} from '@material-ui/core'
import { Close as CloseIcon} from '@material-ui/icons'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import api from '../../services/api'

export default class SignupForm extends React.Component{

    render(){
        return (
                <Dialog open={this.props.open} onClose={()=>this.props.handleClose()} onBackdropClick={()=>this.props.handleClose()}>
                    <DialogTitle id="form-dialog-title" className="text_align_center">Review</DialogTitle>

                    <IconButton title="close" className="close_button" onClick={()=>this.props.handleClose()}>
                        <CloseIcon/>
                    </IconButton>

                    <DialogContent>

                        <DialogContentText className="text_align_center">
                            Let us know what you think !
                        </DialogContentText>

                        <form onSubmit={(event)=>this.handleSubmit(event)}>
                            <div className="signup_inputs_container">
                                <TextField
                                    required
                                    name="title"
                                    id="signup_email"
                                    label="Title"
                                    className="spaced_element"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event)=>this.handleChange(event)}
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    name="description"
                                    label="Multiline"
                                    multiline
                                    rows="10"
                                    defaultValue="Default Value"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event)=>this.handleChange(event)}
                                />
                            
                                <Box component="fieldset" mb={3} borderColor="transparent" className="heart_rating">
                                    <Rating
                                        name="rating"
                                        value={this.state.rating}
                                        precision={0.5}
                                        className="heart_icon"
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        onChange={(event)=>this.handleChange(event)}
                                    />
                                </Box>

                                <Button type="submit" variant="contained" color="primary" >
                                    Submit
                                </Button>
                            </div>
        
                        </form>

                    </DialogContent>

                </Dialog>
        )
    }

    constructor(props){
        super(props)
        this.state = {
            title : '',
            description : '',
            rating  : 1
        }
    }

    //General method to handle the changes to an input value
    handleChange(event){
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async(event)=>{
        let userId = JSON.parse(localStorage.getItem('user'))
        const payload = {userId : userId, title : this.state.title, description : this.state.description, rating : this.state.rating}

        event.preventDefault();
        await api.insertReview(payload).then((review)=>{
            this.props.handleClose()
        })
    }

}