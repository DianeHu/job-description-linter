import React, { Component } from 'react'
import './SidePanel.css';
import '../Services/DescriptionLookup';
import { getCategoryDescription } from '../Services/DescriptionLookup';

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultText: "No Errors Found!",
            resultDetails: []
        }

        //const map = { "masculine": ["man"], "what" :["no"]};
        //this.addVetoedWords(map);
    }

    render() {
        const { resultDetails } = this.state;
        var resultText = '';
        for (var category in resultDetails) {
            resultText += '<h3>' + category.toString() + '</h3><div>' + resultDetails[category] + '</div>';
        }
        if (resultText.length == 0) {
            resultText = this.state.defaultText;
        }
        return (
            <div className="card results">
                <h2 className="card-header">Analysis Details</h2>
                <div className="card-body">{
                    resultDetails.map(x =>
                        <div>
                            <h4>{x.header}</h4>
                            <div>
                                {x.text}{x.description && <br /> }{x.description}
                            </div>
                        </div>
                    )
                }</div>
            </div>
        );
    }

    addVetoedWords(wordMap) {
        for (var category in wordMap) {
            var description = getCategoryDescription(category);
            if (description != null) {
                this.addResult(category, wordMap[category].join(), description);
            } else {
                this.addResult(category, wordMap[category].join());
            }
        }
    }

    addResult(header, text, description) {
        var copiedDetails = this.state.resultDetails;
        copiedDetails.push({ header: header, text: text, description: description });
        this.setState({
            resultDetails: copiedDetails
        });
    }
}

export default SidePanel