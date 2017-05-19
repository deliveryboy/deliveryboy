const allRestaurantsReducer = (state=[], action) => {
  switch (action.type) {
  case 'SET_RESTAURANTS':
    return action.payload;
  default:
    return state;
  }
};
const currentRestaurantReducer = (state={}, action) => {
  switch (action.type) {
  case 'SET_RESTAURANT':
    return action.payload;
  default:
    return state;
  }
};
const selectedRestaurantMeals = (state=[], action) => {
  switch (action.type) {
  case 'SET_RESTAURANT_MEALS':
    return action.payload;
  default:
    return state;
  }
};
const customerProfile = (state={}, action) => {
  switch (action.type) {
  case 'SET_PROFILE':
    return action.payload;
  default:
    return state;
  }
};
const allMealsReducer = (state=[], action) => {
  switch (action.type) {
  case 'SET_MEALS':
    return action.payload;
  default:
    return state;
  }
};
const currentMeal = (state={}, action) => {
  switch (action.type) {
  case 'SET_MEAL':
    return action.payload;
  default:
    return state;
  }
};

export {allRestaurantsReducer,currentRestaurantReducer,selectedRestaurantMeals,customerProfile,allMealsReducer,currentMeal};
