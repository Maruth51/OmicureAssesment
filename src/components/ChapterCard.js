import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import "../styles.css";

const ChapterCard = chapter => {
  return (
    <Fragment>
      <Container className="module-card border border-solid p-2 my-3">
        <Row>
          <span className="pl-3 py-2">
            <Avatar className="avatar" alt="Remy Sharp" src="" />
          </span>
          <Col>
            <span className="module-title">{"Chapter"}</span>
            <br />
            <span className="module-name">{chapter.title}</span>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ChapterCard;
