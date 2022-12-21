import { Counter } from "./Counter.js";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
