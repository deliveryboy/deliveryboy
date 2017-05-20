import {connect} from 'react-redux';
import OrderList from '../OrderList.jsx';
import {selectmeal}from '../../actions.js';


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (meal) =>{dispatch( selectmeal);},
  };
};

const OrderListView= connect(null,mapDispatchToProps)(OrderList);

export default OrderListView;
