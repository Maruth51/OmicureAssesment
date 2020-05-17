import React from "react";
import { Row } from "reactstrap";

const TitleBar = ({ title, value }) => {
  return (
    <Row className="mx-3">
      <div className="title col-lg-8">
        <span>{title + " : "}</span>
        <span style={{ color: "blue" }}>{value}</span>
      </div>
    </Row>
  );
};

export default TitleBar;
