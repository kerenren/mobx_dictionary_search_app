/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import { StoreContext } from "../App";
import { mq } from "../store/mediaQuery";

const Comparison = observer(() => {
  const store = useContext(StoreContext);
  const letter = () => {
    if (store.currentWord) {
      return (
        <span
          css={{
            textTransform: "uppercase",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          "{store.currentWord}"
        </span>
      );
    } else {
      return (
        <span>
          {"<"}letter to be searched{">"}
        </span>
      );
    }
  };

  return (
    <div
      css={mq({
        width: ["90%", "90%", "60%"],
        fontSize: "15px",
        lineHeight: "24px",
        height: "70%",
      })}
    >
      <div>
        {" "}
        <h2 css={{ textTransform: "uppercase" }}>Stats</h2>
        <p>
          Words that start with {letter()} :{" "}
          {store.startLetterCount() ? store.startLetterCount() : 0}{" "}
        </p>
        <p>
          Words that end with {letter()} :{" "}
          {store.endLetterCount() ? store.endLetterCount() : 0}
        </p>
        <p>
          Times that {letter()} appears in dictionary:
          {store.timesIncludedCount() ? store.timesIncludedCount() : 0}
        </p>
        <p>
          Words that have the same letter repeated in conjunction:
          {store.repeatedLetterCount() ? store.repeatedLetterCount() : 0}
        </p>{" "}
      </div>
    </div>
  );
});

export default Comparison;
