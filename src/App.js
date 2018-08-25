import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld';// nosso primeiro componente React!

class App extends Component {
  render() {
    return <HelloWorld/>;
  }
}

export default App;
