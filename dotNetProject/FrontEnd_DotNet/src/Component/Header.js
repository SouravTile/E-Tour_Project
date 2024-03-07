// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import SearchDropdown from '../Component/SearchDropdown';
// import './Header.css';

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/Home">
//           E-TOUR
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/about">
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/registration">
//               Register
//             </Nav.Link>
//             <Nav.Link as={Link} to="/login">
//               Login
//             </Nav.Link>
//             <NavDropdown title="Search" id="basic-nav-dropdown">
//               <SearchDropdown />
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchDropdown from '../Component/SearchDropdown';
import './Header.css';

function Header() {
  const [isLoggedin, setIsLoggedin] = useState(false); // Manage login state

  // Function to toggle login state
  const toggleLoginState = () => {
    setIsLoggedin(!isLoggedin);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here
    // For example, clearing session storage
    sessionStorage.removeItem('uid');
    // Update login state
    setIsLoggedin(false);
  };

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
            <Nav.Link as={Link} to="/registration">
              Register
            </Nav.Link>
            {isLoggedin ? ( // Conditionally render based on login state
              <>
                <Nav.Link as={Link} to="/home" onClick={handleLogout}>Logout</Nav.Link>
                <NavDropdown title="Search" id="basic-nav-dropdown">
                  <SearchDropdown />
                </NavDropdown>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" onClick={toggleLoginState}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
