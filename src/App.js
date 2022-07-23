import "./styles.css";
import React from "react";
import randomcolor from "randomcolor";

let color = randomcolor();

export default function App() {
  const [background, setBackground] = React.useState(color);

  const handleClick = () => {
    let newColor = randomcolor();
    setBackground(newColor);
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: `${background}` }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={handleClick}>Change Color</button>
      </div>
    </div>
  );
}
