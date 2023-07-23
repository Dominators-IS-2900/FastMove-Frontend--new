
import React, { useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LogFirst = () => {
  
  return (
    <>
      <div className="loader-wrapper is-active">
        <ScaleLoader color={"#3CE794"} />
        <p style={{ fontSize: 20 }}>You Must Log First</p>
      </div>
    </>
  );
};

export default LogFirst;
