import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <section>
      <section className={`h-screen w-screen relative pt-5 bg-${bgColor}-500`}>
        <ButtonGroup bgColor={bgColor} handleButtonClick={handleButtonClick} />
      </section>
    </section>
  );
}

export default App;
