import {connect} from 'react-redux';
import DeliveryPersonMap from '../DeliveryPersonMap.jsx';
import {changeDeliveryLocation}from '../../actions.js';



const mapStateToProps = (state)=>{
  return{
    currentDeliverboyLocation : state.currentDeliverboy.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDeliveryLocation: (currentLocation) =>{dispatch( changeDeliveryLocation(currentLocation));},
  };
};

const DeliveryPersonMapView= connect(mapStateToProps,mapDispatchToProps)(DeliveryPersonMap);

export default DeliveryPersonMapView;
