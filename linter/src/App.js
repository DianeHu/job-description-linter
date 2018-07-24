import React, { Component } from 'react';
import './App.css';
import { VetoedWords } from './Services/WordFinder';
import FormContainer from "./Containers/FormContainer";
import NavBar from './Components/NavBar';
import SidePanel from './Components/SidePanel';

class App extends Component {
  render() {
    VetoedWords("Agressive fun flowers shoes Tackle.  MAN what a great day.")
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <FormContainer />
            </div>
            <div className="col-sm-5">
              <SidePanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
