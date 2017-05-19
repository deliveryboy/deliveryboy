import {createStore,combineReducers} from 'redux';
import {allRestaurantsReducer,currentRestaurantReducer,selectedRestaurantMeals,customerProfile,allMealsReducer,currentMeal,markers} from './reducers.js';


const allReducers = combineReducers(
  {
    allRestaurantsReducer: allRestaurantsReducer,
    currentRestaurantReducer: currentRestaurantReducer,
    selectedRestaurantMeals: selectedRestaurantMeals,
    customerProfile: customerProfile,
    allMealsReducer: allMealsReducer,
    currentMeal: currentMeal,
    markers: markers
  }
);

const store = createStore(allReducers);

export default store;
