import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
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

export default function NavigationBarFooter () {
  return(
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="https://www.bytefuge.com">ByteFuge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  );
  }