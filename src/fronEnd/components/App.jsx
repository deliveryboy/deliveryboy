import React from 'react';
import MapView from './Map.jsx';
import Nav from './containers/Navbar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    switch (this.props.currentView) {
    case 'Map':
      return <MapView />;
    default:
      return <Nav />;
    }
  }
}

export default App;
