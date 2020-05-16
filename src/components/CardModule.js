import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import "../styles.css";
import ChapterCard from "./ChapterCard";

const CardModule = ({ module }) => {
  const [chapList, setChap] = useState([]);
  const handleClick = () => {
    getChapterList(module.id)
      .then(res => {
        let { userChapterDetails } = res.lessonDetails;
        setChap(userChapterDetails);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <Fragment>
      <Container
        className="module-card border border-solid p-2 my-3"
        onClick={handleClick}
      >
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
        {chapList.length !== 0
          ? chapList.map((chapter, inder) => {
              return (
                <Row>
                  <ChapterCard />
                </Row>
              );
            })
          : ""}
      </Container>
    </Fragment>
  );
};

export default CardModule;
