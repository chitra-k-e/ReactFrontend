import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Params = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {   
    navigate("/Params2-b", { state: { id } });
  };

  return (
    <div>
      <h1>Component A</h1>
      <p>Received ID: {id}</p>
      <button onClick={handleNavigate}>Go to Component B</button>
    </div>
  );
};

export default Params;
