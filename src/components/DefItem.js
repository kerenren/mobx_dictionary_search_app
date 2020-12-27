/** @jsxImportSource @emotion/react */

import React from "react";

const DefItem = ({ defItem }) => {
  return (
    <li
      key={defItem.defid}
      css={{
        transition: "linear 0.25s",
        lineHeight: 1.58,
        "&:hover": {
          background:
            "linear-gradient(167deg, rgba(117,145,209,1) 0%, rgba(41,65,122,1) 46%, rgba(24,25,25,1) 100%)",
          color: "#FDC05D",
          fontWeight: "bolder",
        },
        boxShadow:
          "0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05)",
        borderRadius: "0 0.5rem 0 0.5rem",
        margin: "1.75rem 0",
        padding: "1rem",
      }}
    >
      {defItem.definition}
    </li>
  );
};

export default DefItem;
