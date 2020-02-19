import React, { Component } from 'react';
import text from '../utils/text.js'

class PlayButton extends Component {

  render() { 
    return ( <button className="btn btn-primary" onClick={this.props.onClick}>{text.play}</button> );
  }
}

export default PlayButton;
