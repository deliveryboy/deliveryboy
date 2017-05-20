import {connect} from 'react-redux';
import DeliveryManApp from '../DeliveryManApp.jsx';
import {ChangeCurrentView,confirmDeliveryOrder,rejectDeliveryOrder}from '../../actions.js';

const mapStateToProps = (state)=>{
  return{
    currentView: state.currentView,
    deliveryboyInfo:state.currentDeliverboy,
    ordersList:state.ordersList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    confirmDeliveryOrder:confirmDeliveryOrder,
    rejectDeliveryOrder:rejectDeliveryOrder
  };
};

const DeliveryManAppView= connect(mapStateToProps,mapDispatchToProps)(DeliveryManApp);

export default DeliveryManAppView;
