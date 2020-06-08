import React, { Component } from 'react';
import './App.css';

import Pokemon from './Pokemon/Pokemon';

/*
Ver como fazer com useEffect e useState
*/


class App extends Component {
  url = `https://pokeapi.co/api/v2/pokedex/2`;

  
  state = {
    pokemons: [
      {name: 'Bulbasaur', id:'001', flavor: 'A strange seed was planted on its back at birth.The plant sprouts and grows with this Pokemon.'},
      {name: 'Ivysaur', id:'002', flavor: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs'}
    ],
    versao: '1.0'
  }

  switchNameHandler = () => {
    //console.log('cliquei');

    this.setState({
      pokemons: [
        {name: 'Charmander', id:'004', flavor: 'Obviously prefers hot places. When it rains, steamis said to spout from the tip of its tail.'},
        {name: 'Charmeleon', id:'005', flavor: 'When it swings its burning tail, it elevates the temperature to unbearably high levels.'}
      ]
    });

  }
  
  render() {
    return (
      <div className="App">
        <h1>Olá, estou usando React</h1>
        <button onClick={this.switchNameHandler}>Mudar Nome</button>
        <Pokemon poke={this.state.pokemons[0]}></Pokemon>
        <Pokemon poke={this.state.pokemons[1]}></Pokemon>
    <h6>Versão: {this.state.versao}</h6>
      </div>
    );
    }
}

export default App;
