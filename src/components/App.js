import React, { Component } from 'react';
import { getAllPeople, getPerson } from '../utils/apiBase'
import PlayButton from './PlayButton';

class App extends Component {
  state = {
    pageLoaded: false,
    TotalPeopleCount: 0,
    card1: null,
    card2: null
  }

  componentDidMount() {
    // Load all the People
    getAllPeople().then(data => {
      console.log('data', data)
      // SAVE DATA
      this.setState({
        pageLoaded: true,
        TotalPeopleCount: data.count
      })
    })
  }

  getNewCards () {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    getPerson(3).then(data => {
      console.log('getNewCards 3', data)
      this.setState({
        card1: data
      })
    })

    getPerson(5).then(data => {
      console.log('getNewCards 5', data)
      this.setState({
        card2: data
      })
    })
  }

  render() { 
    return ( 
      <>
      {this.state.pageLoaded === true &&
        <div>
          {/*<PeopleCards /> */}
          <PlayButton onClick={this.getNewCards.bind(this)} />
        </div>
      }
      {this.state.pageLoaded === false &&
        <div>
          LOADING
        </div>
      }
      </>
     );
  }
}
 
export default App;