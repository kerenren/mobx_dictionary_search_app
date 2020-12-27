/** @jsxImportSource @emotion/react */

import React, { createContext } from "react";
import { jsx } from "@emotion/react";
import facepaint from "facepaint";

import "./App.css";
import Header from "./components/Header";

import storeInstance from "./store/Store";
import Comparison from "./components/Comparison";
import SearchResultDef from "./components/SearchResultDef";

export const StoreContext = createContext();

function App() {
  const breakpoints = [576, 768, 992, 1200];
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
  return (
    <StoreContext.Provider value={storeInstance}>
      <div
        className="App"
        css={mq({
          color: ["green", "gray", "hotpink"],
          fontFamily: "Roboto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100vw",
          height: "100vh",
          padding: ["0 10px", "040px", "050px", "0 60px"],
        })}
      >
        <Header />
        <Comparison />
        <SearchResultDef />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
