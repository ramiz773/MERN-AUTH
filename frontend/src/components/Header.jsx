import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
   return (
      <header>
         <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect>
            <Container>
               <LinkContainer to={"/"}>
                  <Navbar.Brand>Mern Auth</Navbar.Brand>
               </LinkContainer>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <LinkContainer to={"/login"}>
                        <Nav.Link>
                           <FaSignInAlt /> Sign In
                        </Nav.Link>
                     </LinkContainer>
                     <LinkContainer to={"/register"}>
                        <Nav.Link>
                           <FaSignOutAlt /> Sign Up
                        </Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
