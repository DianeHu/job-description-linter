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

        // const map = { "masculine": ["man", "men"], "what" :["no"]};
        // this.addVetoedWords(map);
    }

    render() {
        const { resultDetails } = this.state;
        var issuesFound = 0
        resultDetails.map(x => issuesFound += x.words.length);
        return (
            <div className="card results">
            <div className="card-body">
                <h4 className="card-title">Issues</h4>
                <div className="card-text">{issuesFound} found</div>
            </div>
                <ul className="list-group list-group-flush">{
                    resultDetails.map(x =>
                        <li className="list-group-item">
                            <div>
                                {x.words.join()}{x.description && <br /> }{x.description}
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