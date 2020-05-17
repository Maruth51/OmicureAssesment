import React, { Fragment } from "react";
import { Player, BigPlayButton } from "video-react";
import "../styles.css";
import { Alert, Container } from "reactstrap";
import { connect } from "react-redux";
import Description from "./Description";

const MediaPlayer = ({ src, text }) => {
  return (
    <Fragment>
      <Player className="media-box" src={src}>
        <BigPlayButton position="center" />
      </Player>
      <Description text={text} />
    </Fragment>
  );
};

export default MediaPlayer;
