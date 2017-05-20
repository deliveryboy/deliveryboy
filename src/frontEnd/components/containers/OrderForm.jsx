import {connect} from 'react-redux';
import OrderForm from '../OrderForm.jsx';
import {submitOrder}from '../../actions.js';

const mapStateToProps = (state)=>{
  return{
    selectedMeal:state.selectedMeal
  };
};

const mapDispatchToProps = () => {
  return {
    submitOrder: (order) =>{submitOrder(order)},

  };
};

const OrderFormView= connect(mapStateToProps,mapDispatchToProps)(OrderForm);

export default OrderFormView;
