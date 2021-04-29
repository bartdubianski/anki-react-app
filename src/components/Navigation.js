import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {Navbar, Nav} from 'react-bootstrap'
 
const Navigation = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to={ROUTES.HOME}>Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to={ROUTES.STUDY_NOW}>Study Now</Nav.Link>
      <Nav.Link as={Link} to={ROUTES.CARD_LIST}>Manage Cards in Deck</Nav.Link>
      <Nav.Link as={Link} to={ROUTES.ADD_CARD}>Add New Card</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
);
 
export default Navigation;
