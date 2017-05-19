import {connect} from 'react-redux';
import App from '../App.jsx';
import {ChangeCurrentView,getRestaurants,getMeals}from '../../actions.js';

const mapStateToProps = (state)=>{
  return{
    currentView: state.currentView,
    restaurants:state.restaurants,
    meals:state.meals,
    userInfo:state.currentUser,
    deliveryboyInfo:state.currentDeliverboy,
    restaurantInfo:state.currentRestaurant
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    getRestaurants:getRestaurants,
    getMeals:getMeals
  };
};

const AppView= connect(mapStateToProps,mapDispatchToProps)(App);

export default AppView;
