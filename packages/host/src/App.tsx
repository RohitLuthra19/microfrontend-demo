import React from "react";
//@ts-ignore
import Home from "home/Home";
//@ts-ignore
import Header from "header/Header";

export default () => (
  <div style={{ margin: "20px" }}>
    <React.Suspense fallback="Loading header...">
      <div
        style={{
          border: "1px solid black",
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
              border: "1px solid black",
            }}
          >
            <h2>Header</h2>
            <Header />
          </div>
          <div style={{ border: "1px solid black", padding: "2rem" }}>
            <h2>Home</h2>
            <Home />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);
