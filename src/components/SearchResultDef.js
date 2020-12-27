/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { jsx } from "@emotion/react";

import { StoreContext } from "../App";
import { getDefByWord } from "../store/API";
import PieChart from "./PieChart";

const SearchResultDef = observer(() => {
  const store = useContext(StoreContext);

  const updateDefinitions = async (word) => {
    const wordDef = await getDefByWord(word);
    if (wordDef) {
      store.updateCurrentDefinition(wordDef.list);
    }
  };

  useEffect(() => {
    if (store.currentWord) {
      updateDefinitions(store.currentWord);
    }
  }, [store.currentWord]);

  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen",
        },
        width: "100%",
      }}
    >
      <div css={{ height: "20rem" }}>
        <PieChart />
      </div>
      {store.currentWord && <p>Definition for: {store.currentWord}</p>}
      {store.currentWordDef && (
        <ul>
          {store.currentWordDef
            .filter((defItem) => defItem.thumbs_down < 10)
            .map((defItem) => {
              return <li key={defItem.defid}>{defItem.definition}</li>;
            })}
        </ul>
      )}
    </div>
  );
});

export default SearchResultDef;
