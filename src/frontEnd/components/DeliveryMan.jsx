import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import DeliveryPersonMap from './DeliveryPersonMap.jsx';
import OrderList from './OrderList.jsx';

const UserInfo = () => {
  return (
    <div className="container">
      <Tabs defaultActiveKey={1} id='tabContainer' className="row">
        <Tab eventKey={1} title="الخريطة" className="row"><DeliveryPersonMap /></Tab>
        <Tab eventKey={2} title="الطلبات" className="row"><OrderList/></Tab>
      </Tabs>
    </div>
  );
};

export default UserInfo;
