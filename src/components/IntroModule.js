import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import "../styles.css";

const IntroModule = () => {
  return (
    <Fragment>
      <Container className="module-card border border-solid p-2 my-3">
        <Row>
          <span className="pl-3 py-2">
            <Avatar className="avatar" alt="Remy Sharp" src="" />
          </span>
          <Col className="d-flex align-items-center">
            <span className="module-title">{"Introduction"}</span>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default IntroModule;
