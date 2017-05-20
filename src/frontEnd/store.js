import {createStore,combineReducers} from 'redux';
import {currentView,currentUser,selectedMeal,restaurants,currentRestaurant,deliverboyList,currentDeliverboy,meals,ordersList} from './reducer.js';

const allReducers = combineReducers(
  {
    currentView:currentView,
    currentUser:currentUser,
    currentRestaurant:currentRestaurant,
    currentDeliverboy:currentDeliverboy,
    ordersList:ordersList,
    meals:meals,
    deliverboyList:deliverboyList,
    restaurants:restaurants,
    selectedMeal:selectedMeal

  }
);

const store = createStore(allReducers);

export default store;
