import {connect} from 'react-redux';
import RestaurantApp from '../RestaurantApp.jsx';
import {ChangeCurrentView,confirmOrder,rejectRestaurantOrder}from '../../actions.js';

const mapStateToProps = (state)=>{
  return{
    currentView: state.currentView,
    restaurantInfo:state.currentRestaurant,
    ordersList:state.ordersList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    confirmOrder:confirmOrder,
    rejectRestaurantOrder:rejectRestaurantOrder
  };
};

const RestaurantAppView= connect(mapStateToProps,mapDispatchToProps)(RestaurantApp);

export default RestaurantAppView;
