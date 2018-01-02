import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import backgroundBg from './assets/bg-boxes.png';

class App extends Component {
  render() {
    let sectionStyle = {
      background: 'url('+backgroundBg+') no-repeat center 200px'
    };
    return (
      <BrowserRouter>
        
        <div className="App" style={sectionStyle}>
        {/* <div className="screen1Bg"></div>
        <div className="screen2Bg"></div> */}
        
          <Layout/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
