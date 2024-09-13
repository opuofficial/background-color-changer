import React from "react";
import Button from "../Button";

const ButtonGroup = ({ bgColor, handleButtonClick }) => {
  return (
    <div className="md:fixed md:bottom-10 md:left-1/2 md:-translate-x-1/2 h-full md:h-auto">
      <div className="md:bg-white md:p-3 md:rounded-md flex flex-col items-end justify-end pb-5 pr-5 h-full md:flex-row md:h-auto ml-5 gap-2.5 md:ml-0 md:shadow-md">
        <Button
          text="Violet"
          color="violet"
          bgColor={bgColor}
          handleButtonClick={handleButtonClick}
        />
        <Button
          text="Blue"
          color="blue"
          bgColor={bgColor}
          handleButtonClick={handleButtonClick}
        />
        <Button
          text="Skyblue"
          color="sky"
          bgColor={bgColor}
          handleButtonClick={handleButtonClick}
        />
        <Button
          text="Green"
          color="green"
          bgColor={bgColor}
          handleButtonClick={handleButtonClick}
        />
        <Button
          text="Yellow"
          color="yellow"
          bgColor={bgColor}
          handleButtonClick={handleButtonClick}
        />
        <Button
          text="Orange"
          color="orange"
          bgColor={bgColor}
          handleButtonClick={handleButtonClick}
        />
        <Button
          text="Red"
          color="red"
          bgColor={bgColor}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default ButtonGroup;
