import React, { Component } from 'react';

class PlayButton extends Component {

  render() { 
    return ( <button className="btn btn-primary" onClick={this.props.onClick}>Play</button> );
  }
}
 
export default PlayButton;