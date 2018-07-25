import React, { Component } from 'react';
import './App.css';
import { Acronyms } from  './Services/Acronyms';
import { VetoedWords } from './Services/WordFinder';
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
      highlightCategories: []
    };
    this.vetoedWords = this.vetoedWords.bind(this);
  }

  render() {
    const { highlightCategories } = this.state;
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <PostDetails vetoedWords={this.vetoedWords} highlightCategories={highlightCategories}/>
            </div>
            <div className="col-sm-4">
              <SidePanel highlightCategories={highlightCategories}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  vetoedWords(string) {
    let categories = VetoedWords(string);
    const acronyms = Acronyms(string);
    categories["Acronym"] = acronyms["Acronym"];

    this.setState({
      highlightCategories: categories
    });
  }
}

export default App;
