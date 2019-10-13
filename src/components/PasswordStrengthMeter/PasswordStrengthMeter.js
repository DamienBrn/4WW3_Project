import React from 'react'
import './PasswordStrengthMeter.css'
var zxcvbn = require('zxcvbn');


export default class PasswordStrengthMeter extends React.Component{
    render(){

        return(

            <div className="password_strength_meter">

                <div id="strength_meter_dynamic_value"></div>

            </div>
        )
    }

    constructor(props){
        super(props)
        this.passScore = null
    }

    componentDidUpdate(){
        this.updateStrengthBar()
    }

    updateStrengthBar(){
        this.passScore = this.checkPasswordStrength(this.props.password)
        this.changeStrengthBarValue(this.passScore)
        
    }

    checkPasswordStrength(password){
        let results = zxcvbn(password)
        return this.convertScoreToPercentage(results.score)
    }

    convertScoreToPercentage(score){
        let percentage = (score - 0) / (4 - 0) * 100
        return percentage
    }

    changeStrengthBarValue(scorePercentage){
        let strengthBar = document.getElementById('strength_meter_dynamic_value')
        let backgroundColor = this.getBackgroundColorBasedOnValue(scorePercentage)
        strengthBar.setAttribute('style', 'width:' + scorePercentage + '%;background-color:' + backgroundColor + ';')
    }

    getBackgroundColorBasedOnValue(scorePercentage){
        let color = ''
        if (scorePercentage === 25){
            color = '#ff0004'
        }else if (scorePercentage === 50 ){
            color = '#ffa700'
        }else if (scorePercentage === 75 ){
            color = '#e6f70b'
        }else{
            color = '#1ad01c'
        }
        return color
    }

}