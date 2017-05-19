import {connect} from 'react-redux';
import App from '../App.jsx';
import {ChangeCurrentView}from '../../actions.js';

const mapStateToProps = (state)=>{
  return{
    currentView: state.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
  };
};

const AppView= connect(mapStateToProps,mapDispatchToProps)(App);

export default AppView;
