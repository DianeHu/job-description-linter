import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery';
import {VetoedWords} from "../Services/WordFinder";

class PostDetails extends Component {
    constructor(props) {
        super(props);
        
        this.applyHighlights = this.applyHighlights.bind(this);
    }

    applyHighlights(event) {
        this.props.vetoedWords(event.target.value);
        var termRay = [];

        const { highlightCategories } = this.props;
        if (highlightCategories != null) {
            for(var category in highlightCategories) {
                for(var i = 0; i < highlightCategories[category].length; i++) {
                    termRay.push(highlightCategories[category][i]);
                }
            }
    
            var source = event.target.value;
            var words = source.split(' ');
            var output = '';
            for(var i = 0; i < words.length; i++) {
                var word = words[i];
                var wordToCheck = word.replace(/[.,\#!$%\^&\*;:{}=\_`~()]/g,"")
                if ($.inArray(wordToCheck, termRay) >= 0) {
                    output += '<mark>' + word + '</mark> ';
                } else {
                    output += word + ' ';
                }
            }
    
            document.getElementById("output").innerHTML = output;
        }

    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <div className="card-header">Job description</div>
                    <div className="form-group">
                        <textarea className="highlight form-control" onChange={this.applyHighlights} rows="5"></textarea>
                    </div>
                    <div id="output" className="highlighted"></div>
                </div>
            </div>
        );
    }
}

export default PostDetails;
