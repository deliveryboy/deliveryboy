import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import getLocation from '../mapUtils.js';

const DeliveryIcon = () => <div><img src='/img/marker.webp' style={{
  width: '20px',
  height: '30px'
}}/></div>;
const RestaurantIcon = () => <div><img src='/img/rest.png' style={{
  width: '20px',
  height: '30px'
}}/></div>;
const CustomerIcon = () => <div><img src='/img/customer.png' style={{
  width: '20px',
  height: '30px'
}}/></div>;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      counter: 0,
      intervalId: null
    };

    this.getCurrentLocation  = this.getCurrentLocation.bind(this);
    this.changeState = this.changeState.bind(this);

  }

  changeState(currentLocation){
    this.setState(
    {location: currentLocation}
    );
  }
  getCurrentLocation() {

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos){
        const coords = pos.coords;
        const currentLocation = {
          lat: coords.latitude,
          lng: coords.longitude
        };
        this.props.changeDeliveryLocation(currentLocation);
      });
    }
  }
  componentDidMount() {

    const intervalId = setInterval(this.getCurrentLocation, 3000);
    this.setState({intervalId: intervalId});
  }
  componentWillUnmount() {

    clearInterval(this.state.intervalId);
  }
  render() {
    console.log('props',this.props);
    return (
      <div style={{
        width: '80%',
        height: '400px',
        margin: '0 auto',
        marginTop: '20px'
      }}>
        <GoogleMapReact defaultCenter={{
          lat: 31.512572,
          lng: 34.445110
        }} defaultZoom={16}>
          <DeliveryIcon lat={this.props.location.lat} lng={this.props.location.lng}/>
          <RestaurantIcon lat={31.5127959} lng={34.4481070}/>
          <CustomerIcon lat={31.512572} lng={34.445110}/>
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
