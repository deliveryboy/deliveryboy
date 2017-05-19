import React from 'react';
import FirstFace from './FirstFace.jsx';
import MapContainer from './containers/MapContainer.jsx';
import DeliveryMan from './DeliveryMan.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    switch (this.props.currentView) {
    case 'MAP':
      return <MapContainer />;
    case 'FIRST_FACE':
      return <FirstFace />;
    default:
      return <DeliveryMan />;
    }
  }
}

export default App;
