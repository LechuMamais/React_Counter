import React from "react";
import "./ShowCount.css";

const ShowCount = ({count}) => {
  return (
    <h1 id="ShowCount">
      You clicked {count} time{count == 1 ? "" : "s"}
    </h1>
  );
};

export default ShowCount;
