import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import DeliveryManApp from './components/containers/DeliveryManApp.jsx';
import Navbar from './components//containers/Navbar.js';

const Main = () => {
  return(
  <Provider store={store}>
    <div>
      <Navbar/>
      <DeliveryManApp/>
    </div>
  </Provider>
  );
};

reactDOM.render(
  <Main />, document.getElementById('myApp'));
