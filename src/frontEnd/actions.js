import store from './store.js';

const ChangeCurrentView = (currentView) => {
  return {type: 'CHANGE_CURRENT_VIEW', payload: currentView};
};

const getUser = (user) => {
  fetchWrapper('/' + user).then((res) => {
    if (res != null) {

      store.dispatch({type: 'UPDATE_PROFILE', payload: res});
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

export {ChangeCurrentView,getUser};
