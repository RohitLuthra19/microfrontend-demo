import React from "react";
//@ts-ignore
import Home from "home/Home";
//@ts-ignore
import Header from "header/Header";
//@ts-ignore
import Cart from "cart/Cart";

export default () => (
  <div style={{ margin: "20px" }}>
    <React.Suspense fallback="Loading components...">
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              marginRight: "2rem",
              padding: "2rem",
            }}
          >
            <h2>Header</h2>
            <Header />
          </div>
          <div
            style={{
              padding: "2rem",
              marginRight: "2rem",
            }}
          >
            <h2>Home</h2>
            <Home />
          </div>
          <div style={{ padding: "2rem" }}>
            <h2>Cart</h2>
            <Cart />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);
