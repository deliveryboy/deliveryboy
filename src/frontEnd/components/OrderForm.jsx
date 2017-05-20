import React from 'react';

const OrderForm = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className="order-form-group">
          <input type="text" className="form-control" placeholder="الإسم كامل" autoFocus/>
          <input type="text" className="form-control" placeholder="رقم الجوال" />
          <input type="text" className="form-control" placeholder="المكان" />
          <input type="number" className="form-control" placeholder="الكمية" />
          <button className="btn btn-primary" type="submit">تأكيد</button>
        </div>
      </div>
    </div>
  );
};


export default OrderForm;