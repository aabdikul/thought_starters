import React, { Component } from 'react';

import './App.css';
import DishesContainer from './containers/DishesContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DishesContainer/>
      </div>
    )
  }
}

export default App;
