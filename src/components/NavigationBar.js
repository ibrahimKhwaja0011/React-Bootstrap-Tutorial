import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #eebf0e;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #000;
    font-family:Helvetica;
    font-weight: bold;

    &:hover {
      color: white;
    }
  }
`;

export default function NavigationBar () {
return(
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="https://bytefuge.com">ByteFuge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/"> ABOUT US </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about"> SERVICES WE PROVIDE</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about"> Technologies We Use </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
);
}