import React from 'react';
import reactDOM from 'react-dom';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocation: {
        lat: null,
        lng: null
      }
    };
  }
  componentDidMount() {
    if (this.props.google.hasOwnProperty('maps')) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
          this.loadMap();
        });
      }
    }
  }

  loadMap() {
    if (this.props && this.props.google) {  // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = reactDOM.findDOMNode(mapRef);

      let zoom = 16;
      let lat = this.state.currentLocation.lat;
      let lng = this.state.currentLocation.lng;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      width: '80%',
      height: '500px',
      margin: '0 auto',
      marginTop: '20px'
    };
    return(
      <div ref='map'  style ={style}>
        تحميل الخريطة ...
      </div>
    );
  }
}
export default Map;
