/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { observer } from "mobx-react";

import SearchResultTitle from "./SearchResultTitle";
import { mq } from "../store/mediaQuery";
import { StoreContext } from "../App";
import PieChart from "./PieChart";

const ContentLeft = observer(() => {
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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "flex-start",
      })}
    >
      {store.currentWord && (
        <div
          css={{
            fontSize: "15px",
            lineHeight: 1.58,
            height: "100%",
          }}
        >
          <SearchResultTitle title="Stats" />
          <div>
            Words that start with {letter()} :{" "}
            {store.startLetterCount() ? store.startLetterCount() : 0}{" "}
          </div>
          <div>
            Words that end with {letter()} :{" "}
            {store.endLetterCount() ? store.endLetterCount() : 0}
          </div>
          <div>
            Times that {letter()} appears in dictionary:{" "}
            {store.timesIncludedCount() ? store.timesIncludedCount() : 0}
          </div>
          <div>
            Words that have the same letter repeated in conjunction:{" "}
            {store.repeatedLetterCount() ? store.repeatedLetterCount() : 0}
          </div>
        </div>
      )}

      {store.currentWordDef.length > 0 && (
        <div css={mq({ height: ["40%", "40%", "60%"], width: "100%" })}>
          <PieChart />
        </div>
      )}
    </div>
  );
});

export default ContentLeft;
