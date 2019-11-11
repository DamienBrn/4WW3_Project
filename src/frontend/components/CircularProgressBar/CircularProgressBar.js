import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default class CircularProgresBar extends React.Component{

    render(){
        return(
            <CircularProgressbar 
                value={this.props.value} 
                text={this.props.text} 
                background={this.props.background} 
                className={this.props.className}
                styles={
                    buildStyles({
                        pathColor: this.changeColorBasedonPercentage(this.props.value),
                        textColor: '#ffffff',
                        textSize : '35',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                        })
                }
          />
        )
    }

  //We update the color of the circle based on the percentage
  changeColorBasedonPercentage(percentage){
    let r, g, b = 0 //We set each channel to 0
    let hue
    if(percentage < 50) { //If the percentage is less than 50%, we set the red to max and update multiply the green channel by a color index, to create a "gradient" from red to orange/yellow
      r = 255;
      g = Math.round(5.1 * percentage)
    }
    else { // Same as above but we reverse the channels
      g = 255;
      r = Math.round(510 - 5.10 * percentage)
    }
    hue = r * 0x10000 + g * 0x100 + b * 0x1 // We calculate the hue by multiplying each channel by an hexadecimal index to specify the strongest colors in the gradients

    //We convert the value of the hue an hexadecimal value the css can understand
    return '#' + ('000000' + hue.toString(16)).slice(-6)
  }

}