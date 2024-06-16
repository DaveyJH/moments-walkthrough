import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styles from "../assets/css/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={ styles.NavLink } activeClassName={ styles.Active } to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
            <NavLink className={ styles.NavLink } activeClassName={ styles.Active } to="/signin">
              <i className="fas fa-sign-in-alt"></i> Sign in
            </NavLink>
            <NavLink className={ styles.NavLink } activeClassName={ styles.Active } to="/signup">
              <i className="fas fa-user-plus"></i> Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;