import { useState } from "react";
import Email from "./screens/Email";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Email />
    </>
  );
}

export default App;
