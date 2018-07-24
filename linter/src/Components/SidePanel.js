import React, { Component } from 'react'
import './SidePanel.css';

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            resultText: "No Errors Found!"
        }
    }

    render() {
        const { resultText }  = this.state;
        return (
            <div className="card results">
                <h2 className="card-header">Analysis Details</h2>
                <div className="card-body">{resultText}</div>
            </div>
        );
    }
}

export default SidePanel;