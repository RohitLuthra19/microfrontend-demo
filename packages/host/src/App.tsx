import React from "react";
//@ts-ignore
import Mfe2 from "mfe2/Mfe2";
//@ts-ignore
import Mfe1 from "mfe1/Mfe1";

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
            <h2>Mfe1</h2>
            <Mfe1 />
          </div>
          <div style={{ border: "1px solid black", padding: "2rem" }}>
            <h2>Mfe2</h2>
            <Mfe2 />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);
