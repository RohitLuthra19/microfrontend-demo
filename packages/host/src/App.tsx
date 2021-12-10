import React, { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Cart as CartIcon } from "react-bootstrap-icons";

//@ts-ignore
const Home = React.lazy(() => import("home/Home"));
//@ts-ignore
const Detail = React.lazy(() => import("detail/Detail"));
//@ts-ignore
const Cart = React.lazy(() => import("cart/Cart"));
import "bootstrap/dist/css/bootstrap.min.css";

const Loader = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);
const HomeRoute = () => (
  <React.Suspense fallback={<Loader />}>
    <Home />
  </React.Suspense>
);

const DetailRoute = () => (
  <React.Suspense fallback={<Loader />}>
    <Detail />
  </React.Suspense>
);

const CartRoute = () => (
  <React.Suspense fallback={<Loader />}>
    <h1>Hello</h1>
  </React.Suspense>
);

const App = () => {
  const items = useSelector((state: RootStateOrAny) => state.items);
  return (
    <Router>
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
                {items?.length}
              </span>
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/cart" element={<CartRoute />} />
            <Route path="/detail" element={<DetailRoute />} />
          </Routes>
        </Container>
      </>
    </Router>
  );
};

export default App;
