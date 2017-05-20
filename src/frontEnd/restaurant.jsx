import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import RestaurantApp from './components/containers/RestaurantApp.jsx';
import Navbar from './components//containers/Navbar.js';

const Main = () => {
  return(
  <Provider store={store}>
    <div>
      <Navbar/>
      <RestaurantApp/>
    </div>
  </Provider>
  );
};

reactDOM.render(
  <Main />, document.getElementById('myApp'));
