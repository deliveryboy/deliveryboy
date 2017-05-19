import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>bsbs</div>;

class SimpleMap extends Component {
  render() {
    const defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    };
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}
export default SimpleMap;
