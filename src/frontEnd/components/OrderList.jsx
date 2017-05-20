import React from 'react';
import {Table} from 'react-bootstrap';

const OrderList = ({ordersList}) => {
  return (
    <div className="table-container">
      <Table striped bordered condensed hover >
        <thead>
          <tr>
            <th>#</th>
            <th>المستلم</th>
            <th>مكان المستلم</th>
            <th>المطعم</th>
          </tr>
        </thead>
        <tbody>
          {ordersList.map(function(order){
            return(
              <tr key={1}>
                <td>1</td>
                <td>محمد</td>
                <td>غزة</td>
                <td>طابون</td>
                <button>تأكيد الطلب</button>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
