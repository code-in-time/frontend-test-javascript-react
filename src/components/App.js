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

  /**
   * Get the cards from the API
   * @param {number} id1 
   * @param {number} id2 
   */
  getNewCards (id1, id2) {
    // Get both cards and get teh result at the same time
    Promise.all([getPerson(id1), getPerson(id2)]).then(result => {
      console.log('result', result)
        this.setState({
          card1: result[0],
          card2: result[1]
        });
    });
  }

  render() { 
    return ( 
      <>
      {this.state.pageLoaded === true &&
        <div>
          {/*<PeopleCards /> */}
          <PlayButton onClick={e => this.getNewCards(1,2)} />
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