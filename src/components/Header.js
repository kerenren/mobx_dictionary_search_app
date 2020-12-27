/** @jsxImportSource @emotion/react */

import React, { createContext } from "react";
import { jsx } from "@emotion/react";

import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header
      css={{
        background:
          "linear-gradient(90deg, rgba(26,40,83,1) 0%, rgba(42,47,97,1) 48%, rgba(20,33,61,1) 84%)",
        width: "100vw",
        position: "fixed",
        top: 0,
      }}
    >
      <h1>Kelly's dictionary app</h1>
      <h2>Make your words meaningful</h2>
      <SearchForm />
    </header>
  );
};

export default Header;
