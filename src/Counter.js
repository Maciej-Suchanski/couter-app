import React, { Component } from "react";
import './Counter.css';
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
//import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";
import Step from "./Step";

class Counter extends Component {

    //let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1,
        };
    }

    changeStepValue = (value) => {
        console.log(value);
        this.setState({
            stepValue: value
        });
    }

    //do starego zapisu funkcji 
    //this.changeValue = this.changeValue.bind(this);

    changeValue = (action) => {

        //console.log(action);
        //console.log(`changedValue clicked!`);

        //this.setState({
        //    counterValue: this.state.counterValue + 1
        //})

        //this.setState({
        //    counterValue: this.state.counterValue + 1
        //})

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += Number(this.state.stepValue);
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            };

            return ({
                counterValue: currentCounterValue
            });
        });

        //this.setState((prevState) => {
        ///    return ({
        //        counterValue: prevState.counterValue + 1
        //    })
        //});
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            })
        })
    }

    render() {

        let clockElement = '';
        if (this.state.showClock) {
            /* clockElement = <Clock toggleClockMethod={this.toggleClock}/>; */
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span className="show-clock" onClick={this.toggleClock}>show clock</span>;
        }

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                {/*       <button onClick={this.changeValue}>
                    Add 1
                </button> */}
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue}/>
                <Step updateStep={this.changeStepValue} />
                {clockElement}
            </div>
        );
    }
}
/* 
function Counter(props) {

    //let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    return (
        <div className="counter">
            Counter:
            <span className="value">
                {props.initValue}
            </span>
        </div>
    );
} 
 */
export default Counter;