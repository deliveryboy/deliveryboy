import React from 'react';
import {Button, FormControl, FormGroup, Form, Col} from 'react-bootstrap';

const Login = ({onClick}) => {
  return (
    <div className="container">
      <div className='row'>
        <Form horizontal>
          <FormGroup>
            <Col sm={10}>
              <FormControl type="text" placeholder="إسم المستخدم" required/>
            </Col>
            <Col sm={2}>
              إسم المستخدم
            </Col>
          </FormGroup>
          <Button type="submit" onClick={() => {
            onClick('');
          }}>
            تأكيد
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
