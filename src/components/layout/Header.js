import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';



export const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
      <Navbar.Brand>
          {/* <Link to="/" className='text-dark'> <i  class="fa-solid fa-book-open"></i></Link> */}
        </Navbar.Brand>
        <div className='text-white-50 fs-4 '> Resume</div>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='dropdowntitle ms-auto gap-4 fs-4'>
        {/* <Link to="/" className="nav-link ">Home</Link>
        <Link to="/dashboard" className="nav-link ">Dashboard</Link> */}


         <Link to="/" className="nav-link ">Home</Link>

  
     

        <NavDropdown title="Setting" class="select-icon" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/user/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider /> 
                {" "}
                <NavDropdown.Item as={Link} to="/signin">Signin </NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/signup">Signup </NavDropdown.Item>
    
              </NavDropdown>

        </Nav>


      </Navbar.Collapse>

        
        
      </Container>
    </Navbar>

  )
}
