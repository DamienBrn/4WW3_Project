import React from 'react'
import SubmitItem from '../../components/SubmitItem/SubmitItem'


export default class Submit extends React.PureComponent{

    render(){
        return (
            <div className="safe_view full_view">

                <h1>List your Property</h1>

                <SubmitItem/>
            </div>
        )
    }


    componentDidMount(){
        window.scrollTo(0, 0)
    }

}

