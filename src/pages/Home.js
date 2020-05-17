import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import ModuleList from "../components/ModuleList";
import MediaPlayer from "../components/MediaPlayer";
import { getModuleList } from "../services/dataService";
import TitleBar from "../components/TitleBar";
import { connect } from "react-redux";

const Home = ({ dispatch }) => {
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [modules, setModules] = useState([]);
  const [discription, setDiscription] = useState("");
  const [titleValue, setTitleValue] = useState("Introduction");
  useEffect(() => {
    getModuleList()
      .then(res => {
        setTitle(res.courseDetails.name);
        setVideoUrl(res.courseDetails.introVideo);
        setLoading(false);
        setModules(res.courseDetails.modules);
        setDiscription(res.courseDetails.description);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const updateContent = (url, newtitle) => {
    setVideoUrl(url);
    setTitleValue(newtitle);
  };
  return (
    <Fragment>
      {isLoading ? (
        <Spinner color="primary" />
      ) : (
        <Container fluid>
          <TitleBar title={title} value={titleValue} />
          <Row className="mx-3 justify-content-between">
            <Col md={7} className="mx-3">
              <MediaPlayer src={videoUrl} text={discription} />
            </Col>
            <Col md={4}>
              <ModuleList modules={modules} updateContent={updateContent} />
            </Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default connect()(Home);
