import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayingCard extends Component {
  render() { 
    return ( 
      <div className="card">
      <div className="card-body">
        <ul>
          <h5 className="card-title">{this.props.name}</h5>
          <li>Mass: {this.props.mass}</li>
        </ul>
      </div>
    </div>
     );
  }
}

PlayingCard.defaultProps = {
  name: '',
  mass: ''
};

PlayingCard.propTypes = {
  name: PropTypes.string,
  mass: PropTypes.string
};
 
export default PlayingCard;
