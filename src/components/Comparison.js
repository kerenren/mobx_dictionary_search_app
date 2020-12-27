/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import SearchResultTitle from "./SearchResultTitle";
import { mq } from "../store/mediaQuery";
import { StoreContext } from "../App";
import PieChart from "./PieChart";

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
        marginRight: [0, "40px"],
        fontSize: "15px",
        lineHeight: "24px",
        height: "100%",
      })}
    >
      <div>
        <SearchResultTitle title="Stats" />
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

      {store.currentWordDef.length > 0 && (
        <div css={mq({ height: ["40%", "40%", "70%"] })}>
          <PieChart />
        </div>
      )}
    </div>
  );
});

export default Comparison;
