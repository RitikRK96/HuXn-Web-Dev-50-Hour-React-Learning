import React from "react";
import { Data } from "../App";
import { Data1 } from "../App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <>
                    <div>Component C</div> <br />
                    <button>In component C: {name}</button> <br /><br />
                    <button>Age: {age}</button>
                  </>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
