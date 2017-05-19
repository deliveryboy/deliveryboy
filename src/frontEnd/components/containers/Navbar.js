import {connect} from 'react-redux';
import Navbar from '../Navbar.jsx';
import {ChangeCurrentView}from '../../actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
  };
};

const NavView= connect(null,mapDispatchToProps)(Navbar);

export default NavView;
