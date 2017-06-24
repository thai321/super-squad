import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';


class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.displayCharacter = this.displayCharacter.bind(this);
  }

  displayCharacter(character) {
    const { id, name } = character;
    return (
      <li key={ id } className="list-group-item">
        <div className="list-item">{name}</div>
        <div className="list-item right-button"
          onClick={ () => this.props.addCharacterById(id)}
        >
          +
        </div>
      </li>
    );
  }

  render() {
    // console.log('this.props: ', this.props);
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group" >
          { this.props.characters.map(this.displayCharacter) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    characters: state.characters
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch);
// }

export default connect(mapStateToProps, { addCharacterById } )(CharacterList);
