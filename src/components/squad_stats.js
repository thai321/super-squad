import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class SquadStats extends Component {

  displayItem(type){
    return (
      <li className="list-group-item">
        <b>Overall {type}: { _.sumBy(this.props.heroes, type) }</b>
      </li>
    );
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          { this.displayItem('strength') }
          { this.displayItem('intelligence') }
          { this.displayItem('speed') }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}
export default connect(mapStateToProps, null)(SquadStats);
