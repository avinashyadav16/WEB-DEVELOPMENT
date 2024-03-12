import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-1 rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("Green")}
              className="outline-none px-5 py-1 rounded-full text-white"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-5 py-1 rounded-full text-white"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("Indigo")}
              className="outline-none px-5 py-1 rounded-full text-white"
              style={{ backgroundColor: "Indigo" }}
            >
              Indigo
            </button>

            <button
              onClick={() => setColor("Gold")}
              className="outline-none px-5 py-1 rounded-full text-white"
              style={{ backgroundColor: "Gold" }}
            >
              Gold
            </button>

            <button
              onClick={() => setColor("Gray")}
              className="outline-none px-5 py-1 rounded-full text-white"
              style={{ backgroundColor: "Gray" }}
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
