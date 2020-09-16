import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import blogReducer from './reducers/blogReducer.js';
import DishesContainer from './containers/DishesContainer';
import Navbar from './Navbar';
import DishInput from './components/dishes/DishInput';
import LikedDishes from './components/dishes/LikedDishes';

const store = createStore(blogReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <Navbar />
    <Route path='/home' component={DishesContainer}/>
    <Route path='/create' component={DishInput}/>
    <Route path='/liked' component={LikedDishes}/>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
