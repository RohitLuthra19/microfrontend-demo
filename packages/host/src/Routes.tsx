import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

//@ts-ignore
const Home = React.lazy(() => import("home/Home"));
//@ts-ignore
const Detail = React.lazy(() => import("detail/Detail"));
//@ts-ignore
const Cart = React.lazy(() => import("cart/Cart"));
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

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
    <Cart />
  </React.Suspense>
);

const Routes = ({ page = "home" }) => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/detail/:id" element={<DetailRoute />} />
          <Route path="/cart" element={<CartRoute />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routes;
