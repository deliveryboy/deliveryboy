import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import getLocation from '../mapUtils.js';

const DeliveryIcon = () => <div><img src='/img/marker.webp' style={{width:'20px', height:'30px'}} /></div>;
const RestaurantIcon = () => <div><img src='/img/rest.png' style={{width:'20px', height:'30px'}} /></div>;
const CustomerIcon = () => <div><img src='/img/customer.png' style={{width:'20px', height:'30px'}} /></div>;

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {location : {}};
  }
  componentDidMount(){
    getLocation((location) =>{
      this.setState({location : location});
    });
  }
  render() {
    return (
      <div style={{width:'80%', height:'400px', margin:'0 auto', marginTop:'20px'}}><GoogleMapReact
        defaultCenter={{lat: 31.512688099999995, lng: 34.4451603}}
        defaultZoom={15}
      >
        <DeliveryIcon
          lat={31.512688099999995}
          lng={34.4451603}
        />
        <RestaurantIcon
          lat={31.5182062}
          lng={34.4451603}
        />
      <CustomerIcon
          lat={31.518206212312}
          lng={34.4451603}
        />
      </GoogleMapReact></div>
    );
  }
}
export default Map;
