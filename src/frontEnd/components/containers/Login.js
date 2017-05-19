import {connect} from 'react-redux';
import Login from '../Login.jsx';
import {ChangeCurrentView}from '../../actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
  };
};

const LoginView= connect(null,mapDispatchToProps)(Login);

export default LoginView;
