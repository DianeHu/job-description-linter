import React, { Component } from 'react'
import './SidePanel.css';
import '../Services/DescriptionLookup';
import { getCategoryDescription } from '../Services/DescriptionLookup';

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultDetails: [],
            sentiment: "N/A"
        }
    }

    componentDidUpdate(prevProps) {
        if(!this.areWordMapsEqual(prevProps.highlightCategories, this.props.highlightCategories) || 
            !(prevProps.sentiment === this.props.sentiment)) {
            this.addVetoedWords();
            this.addSentiment();
        }
    }

    render() {
        const resultDetails = this.state.resultDetails;
        const sentiment = this.state.sentiment;
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
            <div className="card-header title">Sentiment</div>
            <div className="card-body">
                <div className="card-text">{sentiment}</div>
            </div>
            </div>
        );
    }

    addSentiment() {
        const textSentiment = this.props.sentiment;
        let convertedTextSentiment = null;
        if (textSentiment >= 0 && textSentiment < 0.4) {
            convertedTextSentiment = "negative 😧";
        } else if (textSentiment >= 0.4 && textSentiment < 0.8) {
            convertedTextSentiment = "neutral 😐";
        } else if (textSentiment >= 0.8){
            convertedTextSentiment = "positive 😄";
        } else {
            convertedTextSentiment = "N/A";
        }
        this.setState({
            sentiment: convertedTextSentiment
        });
    }

    addVetoedWords() {
        const highlightCategories = this.props.highlightCategories;
        var detailsList = [];
        for (var category in highlightCategories) {
            var description = getCategoryDescription(category, highlightCategories[category].length);
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