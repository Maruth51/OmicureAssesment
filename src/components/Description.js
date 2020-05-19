import React, { Fragment } from "react";
import { Container } from "reactstrap";

const Description = ({ text }) => {
  return (
    <Fragment>
      <h2>Description</h2>
      <p className="text-secondary">{text}</p>
    </Fragment>
  );
};

export default Description;
