/** @jsxImportSource @emotion/react */

import React from "react";

const DefNotFound = () => {
  return (
    <div css={{ height: "100%" }}>
      <div css={{ lineHeight: 1.58 }}>
        👀 The current searched word definition is not available or qualified
        enough, please try another word.
      </div>
      <img src="not-found.jpg" alt="not found" css={{ width: "100%" }} />
    </div>
  );
};

export default DefNotFound;
