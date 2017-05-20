import React from 'react';
import PropTypes from 'prop-types';
import Login from './containers/Login.js';
import ResMenu from './ResturantMenu.jsx';
import OrderList from './OrderList.jsx'


class RestaurantApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const {restaurantInfo,currentView,ordersList,confirmOrder,rejectRestaurantOrder} = this.props;
    switch (currentView) {
    case  'LOGIN':
      return <Login/>
    case 'ORDER_LIST':
      return <OrderList
        ordersList={ordersList}
        confirmOrder={confirmOrder}
        rejectRestaurantOrder={rejectRestaurantOrder}
        restaurantInfo={restaurantInfo}/>
    default:
      return <Login />;
    }
  }
}

RestaurantApp.propType = {
  restaurantInfo:PropTypes.object,
  ordersList:PropTypes.array,
  currentView:PropTypes.string,
  confirmOrder:PropTypes.func,
  rejectRestaurantOrder:PropTypes.func
}

export default RestaurantApp;
