import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";

const Detail = () => {
  return (
    <Card>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Detail;
