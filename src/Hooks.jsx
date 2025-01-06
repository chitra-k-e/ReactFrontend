import React, { useState } from "react";

function Hook() {
  let [name, setName] = useState("");
  let handleSubmit = (e) =>{
      e.preventDefault();
  }
  return (
    <>
      <form action="">
        <label>Enter name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
      </form>
      <h1>The name is {name}</h1>
    </>
  );
}

export default Hook;
