import React from "react";
import { Row } from "reactstrap";

const TitleBar = ({ title, value }) => {
  return (
    <Row>
      <div className="title col-lg-7">
        <span className="text-secondary">{title + " : "}</span>
        <span style={{ color: "blue" }}>{value}</span>
      </div>
    </Row>
  );
};

export default TitleBar;
