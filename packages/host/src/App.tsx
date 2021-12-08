import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Cart as CartIcon } from "react-bootstrap-icons";

//@ts-ignore
const Home = React.lazy(() => import("home/Home"));
//@ts-ignore
const Cart = React.lazy(() => import("cart/Cart"));
import "bootstrap/dist/css/bootstrap.min.css";

const HomeRoute = () => (
  <React.Suspense fallback={<div />}>
    <Home />
  </React.Suspense>
);

const CartRoute = () => (
  <React.Suspense fallback={<div />}>
    <Cart />
  </React.Suspense>
);

const App = () => {
  const items = useSelector((state: RootStateOrAny) => state.items);
  return (
    <Router>
      <>
        <Navbar bg="dark" expand="xl">
          <Navbar.Brand>
            <Link to="/" style={{ paddingLeft: "20px", color: "white" }}>
              fKart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ color: "white" }}>
                  Home
                </Link>
              </Nav.Link>
            </Nav>
            <Link
              to="/cart"
              style={{
                paddingRight: 10,
              }}
            >
              <CartIcon color="white" size={30} />
              <span
                style={{ color: "white", fontWeight: "bold", paddingLeft: 5 }}
              >
                2
              </span>
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/cart" element={<CartRoute />} />
          </Routes>
        </Container>
      </>
    </Router>
  );
};

export default connect((state) => state)(App);
