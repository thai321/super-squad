import React, { Component } from 'react';
import CharacterList from './character_list';
import HeroList from './hero_list';
import SquadStats from './squad_stats';
import '../styles/index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Super Squad</h2>

        <div className="col-md-4">
          <CharacterList />
        </div>

        <div className="col-md-4">
          <HeroList />
        </div>

        <div className="col-md-4">
          <SquadStats />
        </div>

      </div>
    );
  }
}

export default App;
