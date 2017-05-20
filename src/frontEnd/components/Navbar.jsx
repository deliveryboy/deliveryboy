import React from 'react';
import {Navbar,Glyphicon} from 'react-bootstrap';

const NavView = ({onClick}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Navbar.Link>Deliverboy</Navbar.Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text pullRight>
          <Navbar.Link onClick={()=>onClick('LOGIN')}><Glyphicon glyph="log-in" /> تسجيل الدخول </Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          |
        </Navbar.Text>
        <Navbar.Text pullRight>
          <Navbar.Link><Glyphicon glyph="shopping-cart" /> سلة المشتريات </Navbar.Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>

  );
};
export default NavView;
