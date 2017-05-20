import React, {Component}from 'react';
import {Button, FormControl, FormGroup, Form, Col} from 'react-bootstrap';


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
        <Form horizontal>
          <FormGroup>
            <Col sm={10}>
              <FormControl type="text" placeholder="إسم المستخدم" value={this.state.name} onChange={this.onNameChange} required/>
            </Col>
            <Col sm={2}>
              إسم المستخدم
            </Col>
          </FormGroup>
          <Button type="submit" onClick={()=>onClick(this.state.name)}>
            تأكيد
          </Button>
        </Form>
      </div>
    </div>
  );
};

};

export default Login;
