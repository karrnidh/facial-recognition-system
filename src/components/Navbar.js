import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Brand className="fs-4">Face Recognition System</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
