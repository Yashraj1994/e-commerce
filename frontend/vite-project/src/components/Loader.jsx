import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "3rem",
          height: "3rem",
          display: "block",
          margin: "auto",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
