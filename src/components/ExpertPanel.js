import React, { useState, useEffect, Fragment } from "react";
import { getExperts } from "../services/dataService";
import Expert from "./Expert";
import { Container } from "reactstrap";

const ExpertPanel = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getExperts().then(res => {
      setExperts(res.expertDetails);
    });
  }, []);
  return (
    <Fragment>
      <h3>Expert Pannel</h3>
      <div className="conatiner">
        <div className="expert-row">
          {experts.map((expert, index) => {
            return <Expert expert={expert} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertPanel;
