import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface IUser {
  name: string;
  id: string;
  image: string;
  price: number;
}

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IUser>({
    id: "",
    name: "",
    image: "",
    price: 0,
  });

  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json?.product);
        console.log(json);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <Card style={{ marginTop: "20px" }}>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" src={data.image} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>
                {data.name} - {data.price}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Detail;
