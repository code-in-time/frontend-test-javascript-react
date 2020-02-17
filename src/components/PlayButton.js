import React, { Component } from 'react';


class PlayButton extends Component {

  btnPlayHandler = e => {
    getAllPeople().then(data => {
      console.log('data', data)
    })
  }


  render() { 
    return ( <button className="btn btn-primary" onClick={this.btnPlayHandler}>Play</button> );
  }
}
 
export default PlayButton;