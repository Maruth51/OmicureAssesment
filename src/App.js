import React, { Fragment } from "react";
import "video-react/dist/video-react.css";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Maruth Assingn</title>
      </Helmet>
      <Home />
    </Fragment>
  );
}
