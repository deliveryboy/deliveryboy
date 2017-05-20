import React from 'react';
import FirstFace from './FirstFace.jsx';
import MapContainer from './containers/MapContainer.jsx';
import PropTypes from 'prop-types';
import Login from './containers/Login.js';
import DeliveryMan from './DeliveryMan.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);


  }

  componentWillMount(){
   this.props.getRestaurants();
   this.props.getMeals();
  }

   componentWillReceiveProps(nextProps){
     this.render();

   }




  render(){

    const {meals,currentView,restaurants} = this.props;
    console.log(currentView);
    switch (currentView) {
    case 'MAP':
      return <MapContainer />;
    case 'FirstFace':
      return <FirstFace meals={meals} restaurants={restaurants}/>
    case 'DELIVERY_MAN':
      return <DeliveryMan />;
    case  'Login':
      return <Login/>
    default:
      return <Login />;
    }
  }
}

App.propType = {
  meals:PropTypes.array,
  restaurants:PropTypes.array,
  getRestaurants:PropTypes.func,
  getMeals:PropTypes.func,
  currentView:PropTypes.string
}

export default App;
