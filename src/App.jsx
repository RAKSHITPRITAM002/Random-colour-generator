
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#3498db");
  const [message, setMessage] = useState("");
  const [colors, setColors] = useState(() =>
    Array.from({ length: 4 }, generateRandomColor),
  );

  function generateRandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0")
    );
  }

  async function copyColor() {
    try {
      await navigator.clipboard.writeText(colors);
      setMessage("Color copied!");
    } catch {
      setMessage("Could not copy. Try again.");
    }
  }

function removecol() {
  setColors(colors.slice(3));
}   

  function changeColor() {
    setColor(generateRandomColor());
    setColors(Array.from({ length: 3 }, generateRandomColor));
    setMessage("");
  }

  return (
    <>
    <div style={{ padding: "30px", textAlign: "center" }}>
      <div
        style={{
          backgroundColor: color,
          height: "200px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      <h1>{color}</h1>

      <div>
        <button onClick={changeColor}>Generate Random Color</button>

        <button onClick={copyColor} style={{ marginLeft: "10px" }}>
          Copy HEX
        </button>
      </div>

      <div style={{ marginTop: "24px" }}>
        {colors.map((paletteColor, index) => (
          <div
            key={index}
            style={{
              backgroundColor: paletteColor,
              padding: "25px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
           
             <button backgroundColor=" {paletteColor}" onClick={copyColor} style={{ marginLeft: "10px" }}>
          Copy HEX
        </button>
        <button onClick={removecol}>Delete</button>
          </div>
        ))}
      </div>

      <p>{message}</p>
    </div>
    </>
  );
}

export default App;
