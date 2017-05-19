import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import App from './components/containers/App.js';

const Main = () => {
  return(
  <Provider store={store}>
    <div>
      <App/>
    </div>
  </Provider>
  );
};
reactDOM.render(
  <Main />, document.getElementById('myApp'));
