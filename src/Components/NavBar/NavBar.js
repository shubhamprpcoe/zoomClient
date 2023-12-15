import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar(props) {
  return (
  
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link ><Link class="navbar-brand" to="/">Home</Link></Nav.Link>
          <Nav.Link > <Link class="navbar-brand" to="/LogIn">LogIn</Link></Nav.Link>
          <Nav.Link ><Link class="navbar-brand" to="/SignUp">SignUp</Link></Nav.Link>   
        </Nav>
      </Container>
    </Navbar>
  );
}
