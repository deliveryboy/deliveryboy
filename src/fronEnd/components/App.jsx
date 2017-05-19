import React from 'react';
import Nav from './containers/Navbar.js';
import MapContainer from './containers/MapContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    switch (this.props.currentView) {
    case 'Map':
      return <MapContainer />;
    default:
      return <Nav />;
    }
  }
}

export default App;
