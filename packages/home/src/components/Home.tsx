import React, { useState, useEffect } from "react";
import { FormControl, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import useApi from "../hooks/useApi";

const Home = () => {
  const [search, searchSet] = useState("");
  const {
    data: { products },
    loading,
    error,
  }: any = useApi("/api/products");

  function handleAddToCart(item: any) {
    console.log(item);
  }

  if (error) return <p>{error}</p>;

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <>
      <Row style={{ paddingTop: "1em" }}>
        <FormControl
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e: any) => searchSet(e.target.value)}
        />
      </Row>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 33%)",
          gridGap: "1em",
          paddingTop: "1em",
        }}
      >
        {products &&
          products
            ?.filter(
              (item: any) =>
                item?.name?.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
            .map((item: any) => (
              <Card style={{ width: "92%", padding: "10px" }} key={item?.id}>
                <Card.Img
                  variant="top"
                  src={item?.image}
                  style={{
                    maxHeight: 200,
                    objectFit: "contain",
                    width: "auto",
                    height: 200,
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ marginBottom: "20px" }}>
                    {item?.name}
                  </Card.Title>
                  <Row>
                    <Col xs={4} style={{ margin: "auto" }}>
                      ₹{item?.price}
                    </Col>
                    <Col xs={8}>
                      <React.Suspense fallback={<span />}>
                        <Button
                          variant="secondary"
                          onClick={() => handleAddToCart(item)}
                          style={{ width: "100%" }}
                        >
                          Add To Cart
                        </Button>
                      </React.Suspense>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
      </div>
    </>
  );
};

export default Home;
