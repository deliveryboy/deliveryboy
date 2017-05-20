import {GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.loaded) {
      return <div> تحميل الخريطة ... </div>;
    }
    return (
      <Map google={this.props.google}></Map>
    );
  }
}
Map.propTypes = {
  loaded: PropTypes.Func,
  google: PropTypes.Obj,

};
export default GoogleApiWrapper({apiKey: 'AIzaSyBDbyhlRYrvzIyh5js27okCuv0AxPjbLjE', version: '3.28'})(Container);
