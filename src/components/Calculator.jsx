import '../styles/App.scss';
import React, { Component } from 'react';
import App from '../App';
import Button from "./controls/Button";


export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = this.defaultState();
    }

    render(){
        let inlineStyle = this.getStyles();
        return (
            <div className='calculator'>
                <h3>BMI Calculator</h3>
                <div className="bmi-result-container">
                    <div className="bmi-result">
                        Body Mass Index (BMI) = {this.state.bmi}
                    </div>
                    <div className="bmi-class" style={inlineStyle[this.state.bmiClass.split(' ')[0].toLowerCase()]}>
                        {this.state.bmiClass}
                    </div>
                </div>
                <div className="bmi-input">
                    <div className="input-fields">
                        <div className="input-group">
                            <span className="label">Height(cm)</span>
                            <input value={this.state.height} 
                            onChange={e=> this.heightChange(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <span className="label">Weight(kg)</span>
                            <input value={this.state.weight} 
                            onChange={e=> this.weightChange(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="bmi-input">
                    <Button className="button" onclick={ this.reset } text='Reset'/>
                </div>  
            </div>
        );
    }

    defaultState = () => {
        return {
            height : 150,
            weight : 67,
            bmi : 20.9,
            bmiClass : 'Normal Class'
        }
    }
    
    reset = () => { this.setState(this.defaultState()); }

    heightChange = (height) =>{
        if(isNaN(height))
            return;
        this.setState({height: height}, this.setBmi);
    }

    weightChange = (weight) => {
        if(isNaN(weight))
            return;
        this.setState({weight: weight}, this.setBmi);
    }

    setBmi = () => {
        let bmi = ((this.state.weight/this.state.height/this.state.height)* 10000).toFixed(2);
        this.setState({bmi : bmi, bmiClass : this.getBmiClass(bmi)});
    }

    getBmiClass = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
        if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
        if (bmi >= 30) return 'Obese';
    }

    getStyles = () => {
        return {
          underweight: { color: '#FFFFFF' },
          normal: { color: '#F9F68D' },
          overweight: { color: '#FED88B' },
          obese: { color: '#FF5411' }
        }
    }

}