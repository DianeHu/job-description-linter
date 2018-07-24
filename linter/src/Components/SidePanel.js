import React, { Component } from 'react'
import './SidePanel.css';
import '../Services/DescriptionLookup';
import { getCategoryDescription } from '../Services/DescriptionLookup';

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultDetails: []
        }
    }

    render() {
        const { resultDetails } = this.state;
        var issuesFound = 0
        resultDetails.map(x => issuesFound += x.words.length);
        return (
            <div className="card results">
                <div className="card-body">
                    <div className="card-title title">Issues</div>
                    <div className="card-text found-count">{issuesFound} found</div>
                </div>
                <ul className="list-group list-group-flush">{
                    resultDetails.map(x =>
                        <li className="list-group-item">
                            <div>
                                <div className="remove-section">
                                    <div className="subtitle">REMOVE</div>
                                    {x.words.join(", ")}
                                </div>
                                <div className="why-section">
                                    <div className="subtitle">WHY</div>
                                    {x.description}
                                </div>
                            </div>
                        </li>
                    )
                }</ul>
            </div>
        );
    }

    addVetoedWords(wordMap) {
        for (var category in wordMap) {
            var description = getCategoryDescription(category);
            this.addResult(category, wordMap[category], description);
        }
    }

    addResult(header, words, description) {
        var copiedDetails = this.state.resultDetails;
        copiedDetails.push({ header: header, words: words, description: description });
        this.setState({
            resultDetails: copiedDetails
        });
    }
}

export default SidePanel