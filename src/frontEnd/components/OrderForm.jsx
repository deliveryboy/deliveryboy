import React from 'react';
import MapView from './CustomerMap.jsx';

const OrderForm = ({selectedMeal,submitOrder}) => {
  return (
    <div className="container">
      <div className='row order-form'>
        <div className="order-form-group">
          <h4>معلومات الطلب</h4>
          <input type="text" className="form-control" placeholder="الإسم كامل" autoFocus/>
          <input type="text" className="form-control" placeholder="رقم الجوال" />
          <input type="text" className="form-control" placeholder="المكان" />
          <input type="number" className="form-control" placeholder="الكمية" />
          <button className="btn btn-primary" type="submit" onClick={({})=>submitOrder({})}>تأكيد</button>
        </div>
        <div className="map">
          <MapView />
        </div>
      </div>
    </div>
  );
};


export default OrderForm;
