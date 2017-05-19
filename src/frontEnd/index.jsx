import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import App from './components/containers/App.js';
import Navbar from './components/containers/Navbar.js';

const Main = () => {
  return(
  <Provider store={store}>
    <div>
      <Navbar/>
        <App/>
    </div>
  </Provider>
  );
};
reactDOM.render(
  <Main />, document.getElementById('myApp'));
