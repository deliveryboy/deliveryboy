import React from 'react';
import PropTypes from 'prop-types';
import Login from './containers/Login.js';
import DeliveryManPage from './DeliveryManPage.jsx';



class DeliveryManApp extends React.Component {
  constructor(props) {
    super(props);
}
  render(){

    const {deliveryboyInfo,currentView,ordersList,confirmOrder,rejectRestaurantOrder} = this.props;
    switch (currentView) {
    case 'DELIVERY_MAN_PAGE':
      return <DeliveryManPage
         ordersList={ordersList}
         confirmOrder={confirmOrder}
         rejectRestaurantOrder={rejectRestaurantOrder}
         />
    case  'LOGIN':
      return <Login/>
    default:
      return <Login />;
    }
  }
}

DeliveryManApp.propType = {
  deliveryboyInfo:PropTypes.object,
  currentView:PropTypes.string,
  ordersList:PropTypes.array,
  rejectRestaurantOrder:PropTypes.func,
  confirmOrder:PropTypes.func
}

export default DeliveryManApp;
