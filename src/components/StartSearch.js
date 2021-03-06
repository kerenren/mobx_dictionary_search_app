/** @jsxImportSource @emotion/react */

import React from "react";

import SearchResultTitle from "./SearchResultTitle";

const StartSearch = () => {
  return (
    <div
      css={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchResultTitle title="Let's start with a word..." />
      <img
        src="search.jpg"
        alt="search engine"
        css={{ maxHeight:"90%", maxWidth: "90%"}}
      />
    </div>
  );
};

export default StartSearch;
