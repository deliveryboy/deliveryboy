import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import getLocation from '../mapUtils.js';

const DeliveryIcon = ({ text }) => <div><img src='/img/marker.webp' style={{width:'20px', height:'30px'}} /></div>;
const RestaurantIcon = ({ text }) => <div><img src='/img/rest.png' style={{width:'20px', height:'30px'}} /></div>;

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {location : {}};
  }
  componentDidMount(){
    getLocation((location) =>{
      console.log(location);
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
          text={'Kreyser Avrora'}
        />
        <RestaurantIcon
          lat={31.5182062}
          lng={34.4451603}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact></div>
    );
  }
}
export default Map;
