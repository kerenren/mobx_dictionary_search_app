/** @jsxImportSource @emotion/react */

import React from "react";

const SearchResultTitle = ({ title }) => {
  return (
    <h2
      css={{
        textTransform: "uppercase",
        color: "#4183f2",
        fontWeight: 500,
        letterSpacing: "0.5px",
        lineHeight: "40px",
      }}
    >
      {title}
    </h2>
  );
};

export default SearchResultTitle;
