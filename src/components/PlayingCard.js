import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayingCard extends Component {
  render() { 
    return ( 
      <div className="card">
      <div className="card-body">
        <ul>
          <h5 className="card-title">{this.props.name}</h5>
          <li>Height: {this.props.height}</li>
          <li>Mass: {this.props.mass}</li>
        </ul>
      </div>
    </div>
     );
  }
}

PlayingCard.defaultProps = {
  name: '',
  height: '',
  mass: ''
};

PlayingCard.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string
};
 
export default PlayingCard;