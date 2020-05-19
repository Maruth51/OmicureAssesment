import React, { Fragment } from "react";
import { Player, BigPlayButton } from "video-react";
import Description from "./Description";

const MediaPlayer = ({ src }) => {
  return (
    <Fragment>
      <Player className="media-box" src={src}>
        <BigPlayButton position="center" />
      </Player>
    </Fragment>
  );
};

export default MediaPlayer;
