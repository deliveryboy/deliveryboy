import React from 'react';
import FirstFace from './FirstFace.jsx';
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
      return <FirstFace />;
    }
  }
}

export default App;
