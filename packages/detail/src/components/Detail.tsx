import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <Card>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>Some quick example - {id}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Detail;
