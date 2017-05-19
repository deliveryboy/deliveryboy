import React from 'react';
import {Table} from 'react-bootstrap';

const OrderList = () => {
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
          <tr>
            <td>1</td>
            <td>محمد</td>
            <td>غزة</td>
            <td>طابون</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
