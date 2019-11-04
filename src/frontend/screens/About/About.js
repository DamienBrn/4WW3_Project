import React from 'react'
import './About.css'


export default class About extends React.PureComponent{

    render(){
        return(

            <div className="safe_view full_view">
                This is the About screen
            </div>

        )
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

}