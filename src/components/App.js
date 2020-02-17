import React, { Component } from 'react';
import { getAllPeople } from '../utils/apiBase'
import PlayButton from './PlayButton';

class App extends Component {
  state = {
    pageLoaded: false,
    TotalPeopleCount: 0
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

  render() { 
    return ( 
      <>
      {this.state.pageLoaded === true &&
        <div>
          {/*<PeopleCards /> */}
          <PlayButton />
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