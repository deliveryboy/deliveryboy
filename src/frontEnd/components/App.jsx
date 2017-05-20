import React from 'react';
import FirstFace from './FirstFace.jsx';
import MapContainer from './containers/MapContainer.jsx';
import PropTypes from 'prop-types';
import Login from './containers/Login.js';
import DeliveryMan from './DeliveryMan.jsx';
import ResMenu from './ResturantMenu.jsx';
import OrderForm from './OrderForm.jsx';
import ResturantOrders from './ResturantOrders.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
   this.props.getRestaurants();
   this.props.getMeals();
  }

  render(){

    const {meals,currentView,restaurants,onClick} = this.props;
    switch (currentView) {
    case 'MAP':
      return <MapContainer />;
    case 'FIRST_FACE':
      return <FirstFace meals={meals} restaurants={restaurants} onClick={onClick}/>;
    case 'DELIVERY_MAN':
      return <DeliveryMan />;
    case  'LOGIN':
      return <Login/>;
    case 'RESTURANT_MENU':
      return <ResMenu onClick={onClick} />;
    case 'ORDER_FORM':
      return <OrderForm />;
    default:
      return <Login/>;
    }
  }
}

App.propType = {
  meals:PropTypes.array,
  restaurants:PropTypes.array,
  getRestaurants:PropTypes.func,
  getMeals:PropTypes.func,
  currentView:PropTypes.string
};

export default App;
