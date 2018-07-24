import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VetoedWords } from './Services/WordFinder';
import FormContainer from "./Containers/FormContainer";
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    VetoedWords("Agressive fun flowers shoes Tackle.  MAN what a great day.")
    return (
      <div>
        <header>
            <NavBar />
        </header>

          <FormContainer />
      </div>
  );
  }
}

export default App;
