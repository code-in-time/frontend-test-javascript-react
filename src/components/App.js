import React, { Component } from 'react';
import { getAllPeople, getPerson } from '../utils/apiBase'
import PlayButton from './PlayButton';
import { pickTwoUniqueNumbers } from '../utils/helpers'
import PlayingCard from './PlayingCard';

class App extends Component {
  state = {
    pageLoaded: false,
    totalPeopleCount: 0,
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
        totalPeopleCount: data.count
      })
    })
  }

  /**
   * Get the cards from the API
   * @param {number} id1 
   * @param {number} id2 
   */
  getNewCards (maxNo) {
    // Reset cards in state
    this.setState({card1: null, card2: null})
    // Pick two card ids
    const cardNos = pickTwoUniqueNumbers(maxNo);
    console.log('cardno', cardNos)

    // Get both cards and get teh result at the same time
    Promise.all([getPerson(cardNos.n1), getPerson(cardNos.n2)]).then(result => {
      console.log('result', result)
        this.setState({
          card1: result[0],
          card2: result[1]
        });
    });
  }

  render() { 
    const { card1, card2, totalPeopleCount, pageLoaded } = this.state;

    return ( 
      <>
      {this.state.pageLoaded === true &&
        <div>
          {/*<PeopleCards /> */}
          <PlayButton onClick={e => this.getNewCards(totalPeopleCount)} />

          { card1 !== null && card2 !== null &&
            <div className="row">
              <div className="col">
                <PlayingCard name={card1.name} mass={card1.mass} />
              </div>
              <div className="col">
                <PlayingCard name={card2.name} mass={card2.mass} />
              </div>
            </div>
          }
        </div>
      }
      {pageLoaded === false &&
        <div>
          LOADING
        </div>
      }
      </>
     );
  }
}
 
export default App;