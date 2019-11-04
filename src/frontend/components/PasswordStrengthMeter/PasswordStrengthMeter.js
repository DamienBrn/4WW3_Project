import React from 'react'
import './PasswordStrengthMeter.css'
var zxcvbn = require('zxcvbn');

/*zxcvbn is a library from Dropbox that contains an algorithm to calculate the
strength of a password basde on multiple dictionaries and common patterns in multiple languages.
I'm using this to calculate the strength of the password the user types in when signing up.
*/


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

    //We update the bar everytime the component is updated (i.e. everytime the value of the password changes)
    componentDidUpdate(){
        this.updateStrengthBar()
    }

    //We update the bar by calling all the necessary methods
    updateStrengthBar(){
        this.passScore = this.checkPasswordStrength(this.props.password)
        this.changeStrengthBarValueAndColor(this.passScore)
    }

    //We use the algorithm from Dropbox to calculate the strength of the password and we return the score (from 0 to 4)
    checkPasswordStrength(password){
        let results = zxcvbn(password)
        return this.convertScoreToPercentage(results.score)
    }


    //We convert the score to the corresponding percentage
    convertScoreToPercentage(score){
        let percentage = (score - 0) / (4 - 0) * 100
        return percentage
    }

    //We update the color and the width of the bar based on the score
    changeStrengthBarValueAndColor(scorePercentage){
        let strengthBar = document.getElementById('strength_meter_dynamic_value')
        let backgroundColor = this.getBackgroundColorBasedOnValue(scorePercentage)
        strengthBar.setAttribute('style', 'width:' + scorePercentage + '%;background-color:' + backgroundColor + ';')
    }

    //We update the color of the bar based on the score (in %)
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