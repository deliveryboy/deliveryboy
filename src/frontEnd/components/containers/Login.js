import {connect} from 'react-redux';
import Login from '../Login.jsx';
import {getUser}from '../../actions.js';

const mapDispatchToProps = () => {
  return {
    onClick: getUser
  };
};

const LoginView= connect(null,mapDispatchToProps)(Login);

export default LoginView;
