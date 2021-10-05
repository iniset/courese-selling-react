import React from 'react';
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from './images/logo.webp';

const Header = () => {
    return (
      <div className="nav-wrap">

        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <NavLink to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Item>
                  <NavLink to="/home" activeClassName="selected">
                    Home
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink to="/about" activeClassName="selected">
                    About Us
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink to="/courses" activeClassName="selected">
                    Courses
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/blog" activeClassName="selected">
                    Blog
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink to="/contact" activeClassName="selected">
                    Contact Us
                  </NavLink>
                </Nav.Item>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;