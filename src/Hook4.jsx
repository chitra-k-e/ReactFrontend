import { useState, useMemo } from "react";

let Hook4 = () => {
  let [number, setNumber] = useState(0);
  let [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => ({
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }), [dark]);
  

  const slow = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <input type="text" onChange={(e) => setNumber(parseInt(e.target.value) || 0)}/>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <h1 style={themeStyles}>{slow}</h1>
    </div>
  );
};

export default Hook4;

let slowFunction = (number) => {
  console.log("Running slow function...");
  for (let i = 0; i < 1000000000; i++) {} 
  return number * 2;
};
