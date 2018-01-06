import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import './App.css';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Paper from 'material-ui/Paper/Paper';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <div className="context">
          
            <div className="top">  
              <Bio />
            </div>
            <div className="middle">
              <Projects />
            </div>
            <div className="bottom">
              <Contact />
            </div>
          </div>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
