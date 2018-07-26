import React, { Component } from 'react';
import './App.css';
import { Acronyms } from  './Services/Acronyms';
import { VetoedWords } from './Services/WordFinder';
import { getSentiment } from "./Services/Sentiment";
import PostDetails from "./Components/PostDetails";
import NavBar from './Components/NavBar';
import SidePanel from './Components/SidePanel';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightCategories: [],
      sentiment: 0,
      lastIntervalId: null
    };
    this.vetoedWords = this.vetoedWords.bind(this);
    this.sentiment = this.sentiment.bind(this);
  }

  render() {
    const highlightCategories = this.state.highlightCategories;
    const sentiment = this.state.sentiment;
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <PostDetails sentiment={this.sentiment} vetoedWords={this.vetoedWords} highlightCategories={highlightCategories}/>
            </div>
            <div className="col-sm-4">
              <SidePanel highlightCategories={highlightCategories} sentiment={sentiment}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  vetoedWords(string) {
    let categories = VetoedWords(string);
    const acronyms = Acronyms(string);

    if (acronyms.length > 0)
    {
      categories["Acronym"] = acronyms;
    }
    
    this.setState({
      highlightCategories: categories
    });
  }

  sentiment(string) {
    let lastIntervalId = this.state.lastIntervalId;
    getSentiment(string, lastIntervalId, state => this.setSentimentState(state), intervalId => this.setIntervalId(intervalId));
  }

  setSentimentState(sentimentValue) {
    this.setState({
      sentiment: sentimentValue,
    });
  }

  setIntervalId(intervalId) {
    this.setState({
      lastIntervalId: intervalId
    });
  }

}

export default App;
