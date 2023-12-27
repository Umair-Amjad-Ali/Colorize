import React, { useState } from "react";
import Button from "./components/Button";
const App = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className=" w-full h-screen " style={{ backgroundColor: color }}>
        <div className="bg-slate-400 mx-72 fixed flex justify-center  bottom-12 inset-x-0  px-2 py-2 rounded-md ">
          <div className="flex justify-center items-center flex-wrap gap-5">
            <Button
              title="Red"
              color="bg-red-600"
              handleColorChange={setColor}
              bgColor="red"
            />
            <Button
              title="slate"
              color="bg-slate-600"
              handleColorChange={setColor}
              bgColor="#708090"
            />
            <Button
              title="Green"
              color="bg-green-600"
              handleColorChange={setColor}
              bgColor="green"
            />
            <Button
              title="Yellow"
              color="bg-yellow-600"
              handleColorChange={setColor}
              bgColor="yellow"
            />
            <Button
              title="Blue"
              color="bg-blue-600"
              handleColorChange={setColor}
              bgColor="blue"
            />
            <Button
              title="black"
              color="bg-black"
              handleColorChange={setColor}
              bgColor="black"
            />
            <Button
              title="Orange"
              color="bg-orange-600"
              handleColorChange={setColor}
              bgColor="Orange"
            />
            <Button
              title=" Sky Blue "
              color="bg-sky-600"
              handleColorChange={setColor}
              bgColor="SlateBlue"
            />
            <Button
              title="Violet"
              color="bg-violet-700"
              handleColorChange={setColor}
              bgColor="Violet"
            />
            <Button
              title="LightGray"
              color="bg-slate-500"
              handleColorChange={setColor}
              bgColor="LightGray"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
