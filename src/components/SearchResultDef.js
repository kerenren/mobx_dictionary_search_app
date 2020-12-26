import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import { StoreContext } from "../App";
import { getDefByWord } from "../store/API";

const SearchResultDef = observer(() => {
  const store = useContext(StoreContext);
  console.log(store);

  const updateDefinitions = async (word) => {
    const wordDef = await getDefByWord(word);
    if (wordDef.list) {
      store.updateCurrentDefinition(wordDef.list);
    }
    return wordDef;
  };

  useEffect(() => {
    if (store.currentWord) {
      updateDefinitions(store.currentWord);
    }
  }, [store.currentWord]);

  return (
    <div>
      {store.currentWord && <p>Definition for: {store.currentWord}</p>}
      {store.currentWordDef && (
        <ul>
          {store.currentWordDef
            .filter((defItem) => defItem.thumbs_down < 10)
            .map((defItem) => {
              return <li id={defItem.defid}>{defItem.definition}</li>;
            })}
        </ul>
      )}
    </div>
  );
});

export default SearchResultDef;
