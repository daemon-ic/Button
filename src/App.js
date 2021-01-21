/* eslint-disable */

import React from "react";
import SpeechButton from "./SpeechButton";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  return (
    <React.Fragment>
      {/* <ButtonAppBar /> */}
      <div
        style={{
          paddingTop: "30vh",
          boxShadow: "6",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <SpeechButton />
      </div>
    </React.Fragment>
  );
}

export default App;
