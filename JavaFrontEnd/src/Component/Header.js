import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchDropdown from '../Component/SearchDropdown';
import './Header.css';

function Header() {
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/Home">
          E-TOUR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/JWT">
              JWT
            </Nav.Link> */}
            <Nav.Link as={Link} to="/registration">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <NavDropdown title="Search" id="basic-nav-dropdown">
              <SearchDropdown />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
