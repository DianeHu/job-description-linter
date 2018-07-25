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

    componentDidUpdate(prevProps) {
        if(!this.areWordMapsEqual(prevProps.highlightCategories, this.props.highlightCategories)) {
            this.addVetoedWords();
        }
    }

    render() {
        const { resultDetails } = this.state;
        var issuesFound = 0
        resultDetails.map(x => issuesFound += x.words.length);
        return (
            <div className="card results">
            <div className="card-header title">Issues</div>
                <div className="card-body">
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

    addVetoedWords() {
        const {highlightCategories} = this.props;
        var detailsList = [];
        for (var category in highlightCategories) {
            var description = getCategoryDescription(category);
            this.addResult(category, highlightCategories[category], description, detailsList);
        }
        this.setState({
            resultDetails: detailsList
        });
    }

    addResult(header, words, description, detailsList) {
        detailsList.push({ header: header, words: words, description: description });
        
    }

    areWordMapsEqual(oldWordMap, newWordMap) {
        if (Object.keys(oldWordMap).length != Object.keys(newWordMap).length) {
            return false;
        }
        for(var category in oldWordMap) {
            var oldList = oldWordMap[category];
            if(newWordMap[category] == null) {
                return false;
            } else if (newWordMap[category].length != oldWordMap[category].length) {
                return false;
            } else {
                var newList = newWordMap[category];
                for(var i = 0; i < newList.length; i++) {
                    if(newList[i] != oldList[i]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

export default SidePanel