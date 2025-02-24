import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Container>
        {/* Left Side - Brand & Links */}
        <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>

        {/* ✅ Right Side - Logout Button in Navbar */}
        <Button 
          variant="danger" 
          className="ms-auto" 
          onClick={() => alert("Logged out!")}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
