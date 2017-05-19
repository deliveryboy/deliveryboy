import React from 'react';
import MapView from './Map.jsx';
import FirstFace from './FirstFace.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    switch (this.props.currentView) {
    case 'Map':
      return <MapView />;
    default:
      return <FirstFace />;
    }
  }
}

export default App;
