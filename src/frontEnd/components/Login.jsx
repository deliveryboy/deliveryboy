import React from 'react';
import PropTypes from 'prop-types';

const Login = ({onClick}) => {
  return (
    <div className="container">
      <div className='row'>
        <div className="log-in-group">
          <input type="text" className="form-control" placeholder="إسم المستخدم" aria-describedby="basic-addon1" autoFocus/>
          <button className="btn btn-primary" type="submit" onClick={() => {
            onClick('DELIVERY_MAN');
          }}>تسجيل الدخول</button>
        </div>
      </div>
    </div>
  );
};

Login.propType = {
  onClick: PropTypes.func
};

export default Login;
