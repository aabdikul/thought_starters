import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { fetchDishes } from './actions/blogActions';
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
