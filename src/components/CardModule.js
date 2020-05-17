import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
//import { GrClock } from "react-icons/gr";
import Avatar from "@material-ui/core/Avatar";
import "../styles.css";
import ChapterCard from "./ChapterCard";
import { getChapterList } from "../services/dataService";

const CardModule = ({ module, updateContent }) => {
  const [chapters, setChapters] = useState([]);

  const handleClick = () => {
    console.log(chapters);
    if (chapters.length === 0) {
      getChapterList(module.id)
        .then(res => {
          let lessonDetails = res.lessonDetails[0];
          let { userChapterDetails } = lessonDetails;
          setChapters(userChapterDetails);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      setChapters([]);
    }
  };
  return (
    <Fragment>
      <Container className="module-card border border-solid p-2 my-3">
        <Row onClick={handleClick}>
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
            <div className="dis-duration">
              {/* <span>
                <GrClock />
              </span> */}
              {" " + module.durationStr}
            </div>
          </Col>
        </Row>
        {chapters.map((chapter, index) => {
          return (
            <Row>
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                updateContent={updateContent}
                id={index + 1}
              />
            </Row>
          );
        })}
      </Container>
    </Fragment>
  );
};

export default CardModule;
