import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld';// nosso primeiro componente React!
import ContaClick from './ContaClick';

class App extends Component {
  render() {
    const nomes = ["Lucas", "Tableless", "Leitor", "Maria", "João", "Ana"];
    return <div>
      {nomes.map((n, i) => <HelloWorld nome={n} key={i}/>)}
      <ContaClick />
    </div>;
  }
}

export default App;
