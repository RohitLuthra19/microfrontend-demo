import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart as CartIcon } from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const items = useSelector((state: RootStateOrAny) => state.items);
  return (
    <>
      <Navbar bg="dark" expand="xl">
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              paddingLeft: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Flipkart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="RouterNavLink">
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </Nav.Link>
          </Nav>
          <Link
            to="/cart"
            style={{
              paddingRight: 10,
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            <CartIcon color="white" size={30} />
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                paddingLeft: 5,
              }}
            >
              {items?.length}
            </span>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
