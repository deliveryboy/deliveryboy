import React from 'react';
import {Table} from 'react-bootstrap';

const OrderList = ({ordersList,onClick}) => {
  return (
    <div className="table-container">
      <h4>سجل الزلمة الي بدو يوصل</h4>
      <Table striped bordered condensed>
        <thead>
          <tr>
            <th>#</th>
            <th>المستلم</th>
            <th>مكان المستلم</th>
            <th>المطعم</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {ordersList.map(function(order){
            return(
              <tr>
                <td>1</td>
                <td>محمد</td>
                <td>غزة</td>
                <td>طابون</td>
                <td>
                  <div className="btn-group btn-group-justified">
                    <a className="btn btn-primary">تأكيد الطلب</a>
                    <a className="btn btn-warning">رفض الطلب </a>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
