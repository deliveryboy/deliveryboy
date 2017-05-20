import store from './store.js';

const ChangeCurrentView = (currentView) => {
  return {type: 'CHANGE_CURRENT_VIEW', payload: currentView};
};

const getUser = (user) => {
  if(user.includes('@delivery')){
    user = user.substring(0, user.lastIndexOf("@"));
    console.log(user);
    getDelivery(user);
  }
  else if (user.includes('@restaurant')) {
    user = user.substring(0, user.lastIndexOf("@"));
    console.log(user);
    getRestaurant(user);
  }
  else{
  fetch('/customers/'+user,{
      method:'GET',
      credentials:'include',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
          return res.json();
      }
      else{
        return null;
      }
    }
  ).then((result) => {
    if (result != null) {
      store.dispatch({type: 'UPDATE_PROFILE', payload: result});
      store.dispatch(ChangeCurrentView('FirstFace'));
    }
  });
}

};

const rejectRestaurantOrder = ()=>{
  //TODO
}

const rejectDeliveryOrder = ()=>{
  //TODO
}

const confirmOrder = ()=>{
  //TODO
}

const confirmDeliveryOrder = ()=>{
  //TODO
}


const order = (order)=>{
  //TODO
}
const getDelivery = (user)=>{
  fetchWrapper('/deliveryboys/'+user)
  .then((result)=>{
    if(result!=null){
      store.dispatch({type:'UPDATE_DELIVERYPROFILE',payload:result});
      store.dispatch(ChangeCurrentView('DELIVERY_MAN_PAGE'));
    }
  });
};


const getRestaurant = (restaurant)=>{
  fetchWrapper('/restaurants/'+restaurant)
  .then((result)=>{
    if(result!=null){
      console.log('insiderestaurant');
      store.dispatch({type:'UPDATE_RESTAURANTPROFILE',payload:result});
      store.dispatch(ChangeCurrentView('ORDER_LIST'));
    }
  });
};

const getRestaurants = ()=>{
  fetchWrapper('/restaurants')
  .then((result)=>{
    if(result!=null){
      store.dispatch({type:'GET_RESTAURANTS',payload:result});
    }
  });
};

const getMeals = ()=>{
  fetchWrapper('/meals')
  .then((result)=>{
    if(result!=null){
      store.dispatch({type:'GET_MEALS',payload:result});
    }
  });
}


const getDeliveryOrders = (id)=>{
  fetchWrapper('/deliverboyOrders'+id)
  .then((result)=>{
    if(result!=null){
      store.dispatch({type:'FETCH_ORDERS',payload:result});
    }
  });
};

const getRestaurantOrders = (id)=>{
  fetchWrapper('/getRestaurantOrders'+id)
  .then((result)=>{
    if(result!=null){
      store.dispatch({type:'FETCH_ORDERS',payload:result});
    }
  });
};


const fetchWrapper = (url, method, body) => {
  return fetch(url, {
    method: method || 'GET',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    }
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return null;
    }
  });

};

export {
  ChangeCurrentView,
  getUser,
  getDelivery,
  getRestaurant,
  getDeliveryOrders,
  getRestaurantOrders,
  getMeals,
  getRestaurants,
  confirmOrder,
  order,
  confirmDeliveryOrder,
  rejectDeliveryOrder,
  rejectRestaurantOrder
};
