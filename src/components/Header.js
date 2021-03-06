/** @jsxImportSource @emotion/react */

import React from "react";

import { mq } from "../store/mediaQuery";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header
      css={mq({
        background:
          "linear-gradient(90deg, rgba(26,40,83,1) 0%, rgba(42,47,97,1) 48%, rgba(20,33,61,1) 84%)",
        width: "100vw",
        zIndex: 100,
        color: "white",
        display: "flex",
        flexDirection: ["column", "row"],
        alignItems: "center",
        height: "200px",
        textAlign: "left",
        padding: "20px 0",
      })}
    >
      <div css={{ flexGrow: 1, padding: "0 20px" }}>
        <h1
          css={{
            borderBottom: "1px solid #FCA311",
            paddingBottom: "10px",
          }}
        >
          Kelly's dictionary app
        </h1>
        <span css={{ fontsize: "16px" }}>Make your words counted</span>
      </div>
      <div
        css={mq({
          flexGrow: 2,
          width: ["90%", "65%"],
          padding: ["20px 0 0 0", "0 20px 0 0"],
        })}
      >
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
