/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { observer } from "mobx-react";

import SearchResultTitle from "./SearchResultTitle";
import { mq } from "../store/mediaQuery";
import { StoreContext } from "../App";
import PieChart from "./PieChart";

const StatsContent = observer(() => {
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
        paddingBottom:['24px',0],
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: ["start", "start", "center"],
        justifyContent: "flex-start",
      })}
    >
      {store.currentWord && (
        <div
          css={{
            fontSize: "15px",
            lineHeight: 1.58,
          }}
        >
          <SearchResultTitle title="Stats" />
          <div>
            Words that start with {letter()} : {store.startLetterCount}
          </div>
          <div>
            Words that end with {letter()} : {store.endLetterCount}
          </div>
          <div>
            Times that {letter()} appears in dictionary:{" "}
            {store.timesIncludedCount}
          </div>
          <div>
            Words that have the same letter repeated in conjunction:{" "}
            {store.repeatedLetterCount}
          </div>
        </div>
      )}

      {store.currentWordDef.length > 0 && (
        <div
          css={mq({
            height: ["200px", "200px", "200px", "280px"],
            width: ["380px", "380px", "380px", "430px"],
          })}
        >
          <PieChart />
        </div>
      )}
    </div>
  );
});

export default StatsContent;
