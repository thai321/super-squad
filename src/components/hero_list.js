import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class HeroList extends Component {
  constructor(props) {
     super(props);
     this.displayHero = this.displayHero.bind(this);
  }

  displayHero(hero) {
    const { id, name } = hero;
    return (
      <li key={id} className="list-group-item">
        <div className="list-item">
          {name}
        </div>

        <div className="list-item right-button"
          onClick={ () => this.props.removeCharacterById(id)}
        >
          x
        </div>

      </li>
    );
  }

  render() {
    return (
      <div>
        <h4>Your Hero Squad:</h4>

        <ul className="list-group">
          {this.props.heroes.map(this.displayHero)}
        </ul>

      </div>
    );
  }
}


function mapStateToProps(state) {
  // console.log('state remove: ', state);
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, { removeCharacterById } )(HeroList);
