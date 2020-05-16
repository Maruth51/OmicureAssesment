import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import "../styles.css";
import ChapterCard from "./ChapterCard";

const CardModule = ({ module }) => {
  const [chapList, setChap] = useState([]);
  return (
    <Fragment>
      <Container className="module-card border border-solid p-2 my-3">
        <Row>
          <span className="pl-3 py-2">
            <Avatar
              className="avatar"
              alt="Remy Sharp"
              src={module.moduleExperts[0].profilePic}
            />
          </span>
          <Col>
            <span className="module-title">{module.title + " - "}</span>
            <span className="module-name">{module.name}</span>
          </Col>
        </Row>

        <ChapterCard />
      </Container>
    </Fragment>
  );
};

export default CardModule;
