import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MapView from './Map.jsx';
import OrderList from './OrderList.jsx';
import PropTypes from 'prop-types';


const DeliveryManPage = ({ordersList,confirmDeliveryOrder,rejectDeliveryOrder,deliveryboyInfo}) => {
  return (
    <div className="container">
      <Tabs defaultActiveKey={1} id='tabContainer' className="row">
        <Tab eventKey={1} title="الخريطة" className="row"><MapView /></Tab>
        <Tab eventKey={2} title="الطلبات" className="row"><OrderList
          ordersList={ordersList}
          confirmDeliveryOrder={confirmDeliveryOrder}
          rejectDeliveryOrder={rejectDeliveryOrder}
          deliveryboyInfo={deliveryboyInfo}/></Tab>
      </Tabs>
    </div>
  );
};

DeliveryManPage.propType = {
  deliveryboyInfo:PropTypes.object,
  ordersList:PropTypes.array,
  rejectRestaurantOrder:PropTypes.func,
  confirmOrder:PropTypes.func
}

export default DeliveryManPage;
