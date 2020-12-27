/** @jsxImportSource @emotion/react */

import React, { createContext } from "react";

import { mq } from "../store/mediaQuery";
import Comparison from "./Comparison";
import SearchResultDef from "./SearchResultDef";

const Content = () => {
  return (
    <div
      css={mq({
        width: ["90%", "80%"],
        maxWidth: "100%",
        minHeight: [0, "20rem"],
        margin: [0, "100px auto"],
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
  );
};

export default Content;
