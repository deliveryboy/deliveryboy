import React from 'react';
import {Navbar,Glyphicon} from 'react-bootstrap';

const NavView = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text pullRight>
          <Navbar.Link>التوصيل</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          <Navbar.Link><Glyphicon glyph="shopping-cart" /> سلة المشتريات </Navbar.Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavView;
