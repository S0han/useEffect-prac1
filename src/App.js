import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("Hi there, how are you?");

  useEffect(() => {
    console.log("trigger use effect hook");

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000);
  }, []);

  console.log("App component rendered,");
  return <h1>{message}</h1>;
};

export default App;
