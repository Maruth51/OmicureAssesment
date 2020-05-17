import React from "react";

const Expert = ({ expert }) => {
  return (
    <div className="profile">
      <img
        className="img-thumbnail image"
        alt={expert.title}
        src={expert.profilePic}
      />
      <div
        className="text-center"
        style={{ color: "#7866df", fontWeight: "bold" }}
      >
        {expert.title + " " + expert.expertName}
      </div>
      <div className="text-center" style={{ color: "rgb(212, 47, 212)" }}>
        {expert.qualification}
      </div>
    </div>
  );
};
export default Expert;
