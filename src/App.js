import React, { useMemo, useEffect } from "react";
function App() {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme Styles");
  }, [themeStyles]);

  function slowFunction(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }
  return (
    <React.Fragment>
      <main>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setDark((prevState) => !prevState)}>
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </main>
    </React.Fragment>
  );
}

export default App;
