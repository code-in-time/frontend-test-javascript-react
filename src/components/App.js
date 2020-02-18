import React, { Component } from 'react';
import { getAllPeople, getPerson } from '../utils/apiBase'
import PlayButton from './PlayButton';
import { pickTwoUniqueNumbers } from '../utils/helpers'
import PlayingCard from './PlayingCard';
import WinnerBanner from './WinnerBanner';
import text from '../utils/text.js'

class App extends Component {
  state = {
    pageLoaded: false,
    totalPeopleCount: 0,
    card1: null,
    card2: null,
    result: ''
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
    // Reset
    this.setState({card1: null, card2: null, result: null})
    // Pick two card ids
    const cardNos = pickTwoUniqueNumbers(maxNo);
    console.log('cardno', cardNos)

    // Get both cards and get teh result at the same time
    Promise.all([getPerson(cardNos.n1), getPerson(cardNos.n2)]).then(result => {
      this.setState({
        card1: result[0],
        card2: result[1]
      });

      this.calculateWinnerOfMass(
        this.state.card1.name,
        this.state.card1.mass,
        this.state.card2.name,
        this.state.card2.mass);

    });
  }

  calculateWinnerOfMass(card1Name, card1Mass, card2Name, card2Mass) {

    let result = ''
    // TODO: handle unknown
    if (typeof card1Mass === 'string' ||  typeof card2Mass === 'string'){
      result = text.noWinner;
    } else if (card1Mass === card2Mass){
      result = text.draw;
    } else if (card1Mass > card2Mass){
      result = card1Name;
    } else if (card2Mass > card1Mass){
      result = card2Name;
    }

    // save the result
    this.setState({
      result
    });
  }

  render() { 
    const { card1, card2, totalPeopleCount, pageLoaded, result } = this.state;

    return ( 
      <>
      {this.state.pageLoaded === true &&
        <div>
          <h3>{text.clickTo}</h3>
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

          {/* Show the winner */}
          {result !== '' && <WinnerBanner result={result} />}
        </div>
      }
      {pageLoaded === false &&
        <div>
          {text.loading}
        </div>
      }
      </>
     );
  }
}
 
export default App;