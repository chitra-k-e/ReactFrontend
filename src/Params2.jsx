import React from "react";
import { useLocation } from "react-router-dom";

const Params2 = () => {
  const location = useLocation();
  const { id } = location.state || {};

  return (
    <div>
      <h1>Component B</h1>
      {id ? <p>Received ID from Component A: {id}</p> : <p>No data received</p>}
    </div>
  );
};

export default Params2;
