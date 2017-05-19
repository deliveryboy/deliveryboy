const currentView = (state='',action)=>{
  switch(action.type){
  case 'CHANGE_CURRENT_VIEW':
    return action.payload;
  default:
    return state;
  }
};

const currentUser = (state = {},action)=>{
  switch (action.payload) {
  case 'UPDATE_PROFILE':
    return action.payload;
  default:
    return state;
  }
};

const restaurants = (state = [],action)=>{
  switch (action.payload) {
  case 'GET_RESTAURANTS':
    return action.payload;
  default:
    return state;
  }
};

const currentRestaurant = (state = {},action)=>{
  switch (action.payload) {
  case 'UPDATE_RESTAURANTPROFILE':
    return action.payload;
  default:
    return state;

  }
};

const deliverboyList = (state={},action)=>{
  switch (action.payload) {
  case 'GET_DELIVERYBOYSLIST':
    return action.payload;
  default:
    return state;
  }
};

const deliverboy = (state={},action)=>{
  switch (action.payload) {
  case 'UPDATE_DELIVERYPROFILE':
    return action.payload;
  default:
    return state;
  }
};

const meals = (state=[],action)=>{
  switch (action.payload) {
  case 'GET_MEALS':
    return action.payload;
  default:
    return state;
  }

};

const ordersList = (state = [],action)=>{
  switch (action.payload) {
  case 'FETCH_ORDERS':
    return action.payload;
  default:
    return state;

  }
};






export {currentView,currentUser,restaurants,currentRestaurant,deliverboyList,deliverboy,meals,ordersList};
