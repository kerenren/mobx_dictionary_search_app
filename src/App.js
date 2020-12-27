/** @jsxImportSource @emotion/react */

import React, { createContext } from "react";

import Content from "./components/Content";
import storeInstance from "./store/Store";
import Header from "./components/Header";
import { mq } from "./store/mediaQuery";
import "./styles/custom.css";

export const StoreContext = createContext();

function App() {
  return (
    <StoreContext.Provider value={storeInstance}>
      <div
        className="App"
        css={mq({
          color: ["#FCA311", "#FCA311", "#14213D"],
          fontFamily: "Roboto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100vw",
          height: "100vh",
          padding: [0, "0 40px", "0 50px", "0 60px"],
          fontSize: "16px",
          margin: "auto",
          backgroundColor: "#f7f7f7",
        })}
      >
        <Header />
        <Content />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
