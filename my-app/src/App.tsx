import React, { useState } from "react";
import "./App.css";
import Logo from "./Logo";

const App = () => {
  const [isCodeState, setIsCodeState] = useState<boolean>(true);
  return (
    <div className="App">
      <button type="button" onClick={() => setIsCodeState(!isCodeState)}>
        Toggle Is Code State:{`${isCodeState}`}
      </button>
      <header className="App-header">
        <Logo isCodeState={isCodeState} />
      </header>
    </div>
  );
};

export default App;
