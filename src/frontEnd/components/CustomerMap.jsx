import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import getLocation from '../mapUtils.js';
const LOCATIONS= [{lat:31.514174, lng:34.448048},
    {lat:31.514037, lng:34.448177},
    {lat:31.514174, lng:34.448048},
    {lat:31.513840, lng:34.448397},
    {lat:31.513751, lng:34.448467},
    {lat:31.513531, lng:34.448208},
    {lat:31.513295, lng:34.447911},
    {lat:31.513102, lng:34.448137},
    {lat:31.512811, lng:34.448511},
    {lat:31.512354, lng:34.448242},
    {lat:31.512198, lng:34.448414},
    {lat:31.512180, lng:34.448071},
    {lat:31.511842, lng:34.447738},
    {lat:31.511476, lng:34.447524},
    {lat:31.511384, lng:34.447137},
    {lat:31.511842, lng:34.446472},
    {lat:31.512162, lng:34.445914},
    {lat:31.512427, lng:34.445399},
    {lat:31.512564, lng:34.445185}];

const DeliveryIcon = () => <div><img src='/img/marker.webp' style={{width:'20px', height:'30px'}} /></div>;
const RestaurantIcon = () => <div><img src='/img/rest.png' style={{width:'20px', height:'30px'}} /></div>;
const CustomerIcon = () => <div><img src='/img/customer.png' style={{width:'20px', height:'30px'}} /></div>;

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      location : {},
      counter:0,
      intervalId:null
    };
  }
  
  componentDidMount(){
    // getLocation((location) =>{
    //   this.setState({location : location});
    // });
    const intervalId = setInterval(() => {
      this.setState({location : LOCATIONS[this.state.counter],
        counter: (this.state.counter < LOCATIONS.length-1)?this.state.counter+1:LOCATIONS.length-1});
    },4000);
    this.setState({intervalId: intervalId});
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <div style={{width:'80%', height:'400px', margin:'0 auto', marginTop:'20px'}}><GoogleMapReact
        defaultCenter={{lat:31.512572, lng:34.445110}}
        defaultZoom={16}
      >
        <DeliveryIcon
          lat={this.state.location.lat}
          lng={this.state.location.lng}
        />
        <RestaurantIcon
          lat={31.5127959}
          lng={34.4481070}
        />
      <CustomerIcon
          lat={31.512572}
          lng={34.445110}
        />
      </GoogleMapReact></div>
    );
  }
}
export default Map;
