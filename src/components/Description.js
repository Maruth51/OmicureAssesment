import React from "react";
import { Container } from "reactstrap";

const Description = ({ text }) => {
  return (
    <Container fluid>
      <h2>Description</h2>
      <p>{text}</p>
    </Container>
  );
};

export default Description;
