import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState("ism");
  const fruit = () => {
    setState("Abdulaziz");
  };
  return (
    <div>
      <button onClick={fruit}>{state}</button>
    </div>
  );
};

export default App;
