/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import DefinitionsList from "./DefinitionsList";
import { getDefByWord } from "../store/API";
import { mq } from "../store/mediaQuery";
import { StoreContext } from "../App";

const DefinitionContent = observer(() => {
  const store = useContext(StoreContext);

  const updateDefinitions = async (word) => {
    const wordDef = await getDefByWord(word);
    if (wordDef) {
      store.updateCurrentDefinition(wordDef.list);
    }
  };

  useEffect(() => {
    if (store.currentWord && store.currentWord !== "") {
      updateDefinitions(store.currentWord);
    }
  }, [store.currentWord]);

  return (
    <div
      css={mq({
        height: "100%",
        width: ["90%", "90%", "40%"],
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "flex-start",
      })}
    >
      <DefinitionsList />
    </div>
  );
});

export default DefinitionContent;
