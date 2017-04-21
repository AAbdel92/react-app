import React, { Component } from 'react';
import RouterComponent from "./Router/Router.js";
import logo from './logo.svg';
import './App.css';

import Site from "./Site/Site.js";

class App extends Component {

  render() {
    return (
      <div>
        <Site />
      </div>
    );
  }
}

export default App;
