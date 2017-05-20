
import React,{Component}from 'react';
import PropTypes from 'prop-types';


 class Login extends Component {
  constructor(props) {
    super(props);
  this.state = {
    name:''
  }

  this.onNameChange = this.onNameChange.bind(this);

  }

  onNameChange(ev){
    this.setState({
      name:ev.target.value
    });
  }

   render() {
     const {onClick} = this.props;

  return (
    <div className="container">
      <div className='row'>
        <div className="log-in-group">
          <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} placeholder="إسم المستخدم" aria-describedby="basic-addon1" autoFocus/>
          <button className="btn btn-primary" type="submit" onClick={() => {
            onClick(this.state.name);
          }}>تسجيل الدخول</button>
        </div>
      </div>
    </div>
  );
};
};


Login.propType = {
  onClick: PropTypes.func

};

export default Login;
