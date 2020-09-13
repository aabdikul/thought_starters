import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { fetchDishes } from './actions/blogActions';
import DishesContainer from './containers/DishesContainer';
import CommentsContainer from './containers/CommentsContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DishesContainer/>
        <CommentsContainer/>
      </div>
    )
  }
}

export default App;
