import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardModule from "./CardModule";
import "../styles.css";
import { Avatar } from "@material-ui/core";
import IntroModule from "./IntroModule";

const ModuleList = ({ modules }) => {
  return (
    <Container className="mod-list">
      <IntroModule />
      {modules.map((module, index) => {
        return <CardModule module={module} key={index} />;
      })}
    </Container>
  );
};

export default ModuleList;
