import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";

const navBar=() =>{

    return (
        <Navbar bg="danger" fixed="top" text="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">My Reads App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default navBar;