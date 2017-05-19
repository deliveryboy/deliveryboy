import {createStore,combineReducers} from 'redux';
import {currentView} from './reducer.js';

const allReducers = combineReducers(
  {
    currentView:currentView});



const store = createStore(allReducers);

export default store;
