import store from './store.js';

const ChangeCurrentView = (currentView) => {
  return {type: 'CHANGE_CURRENT_VIEW', payload: currentView};
};

const getUser = (user) => {
  fetchWrapper('/' + user).then((result) => {
    if (result != null) {

      store.dispatch({type: 'UPDATE_PROFILE', payload: result});
    }

  });

};
const getDelivery = (user)=>{
  fetchWrapper('/'+user)
  .then((result)=>{
    if(result!=null){
      store.dispatch({type:'UPDATE_DELIVERYPROFILE',payload:result});
    }
  });
};


const getRestaurant = (restaurant)=>{
  fetchWrapper('/'+restaurant)
  .then((result)=>{
    if(result!=null){
      store.dispatch({type:'UPDATE_RESTAURANTPROFILE',payload:result});
    }
  });
};


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

export {ChangeCurrentView,getUser,getDelivery,getRestaurant,getDeliveryOrders,getRestaurantOrders};
