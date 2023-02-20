import React, { Component } from "react";
import './Step.css';

class Step extends Component {

    render() {
        return (
            <div className="step">
                <span>
                    Krok:
                </span>
                <input type="number" defaultValue='1' onChange={(e)=>{this.props.updateStep(e.target.value)}}/>
            </div>
        );
    }
}

export default Step;