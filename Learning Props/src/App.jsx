import "./App.css";
import { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Ritik Kumar";
  const age = 21;

  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;