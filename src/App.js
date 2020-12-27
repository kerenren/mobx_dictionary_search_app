/** @jsxImportSource @emotion/react */

import React, { createContext } from "react";

import "./styles/custom.css";
import { mq } from "./store/mediaQuery";
import Header from "./components/Header";
import storeInstance from "./store/Store";
import Comparison from "./components/Comparison";
import SearchResultDef from "./components/SearchResultDef";

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
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100vw",
          height: "100vh",
          padding: ["0 10px", "0 40px", "0 50px", "0 60px"],
          fontSize: "16px",
          margin: "auto",
          backgroundColor: "#f7f7f7",
        })}
      >
        <Header />
        <div
          css={mq({
            width: ["90%", "80%"],
            maxWidth: "100%",
            minHeight: "30rem",
            margin: "100px auto 100px auto",
            display: "flex",
            justifyContent: ["flex-start", "flex-start", "center"],
            alignItems: "center",
            flexDirection: ["column", "column", "row"],
            boxShadow: "0 2px 2px 0 rgba(0,0,0,0.12)",
            padding: ["24px", "32px"],
            textAlign: "left",
            borderRadius: "6px",
            backgroundColor: "white",
            overflowY: "auto",
            "&:hover": {
              boxShadow:
                "0 8px 10px 1px rgba(0,0,0,0.07), 0 3px 14px 3px rgba(0,0,0,0.06), 0 4px 5px 0 rgba(0,0,0,0.1);",
            },
          })}
        >
          <Comparison />
          <SearchResultDef />
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
