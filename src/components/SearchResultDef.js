import React, { useContext, useEffect } from "react";
import { useObserver, Observer } from "mobx-react";

import { StoreContext } from "../App";
import { getDefByWord } from "../store/API";

const SearchResultDef = () => {
  const store = useContext(StoreContext);
  console.log(store.currentWord);
  const getWords = async (word) => {
    const wordDef = await getDefByWord(word);
    console.log(
      "🚀 ~ file: SearchResultDef.js ~ line 12 ~ getWords ~ wordDef",
      wordDef
    );
  };

  useEffect(() => {
    if (store.currentWord) {
      getWords(store.currentWord);
    }
  });

  return useObserver(() => <p>Definition for: {store.currentWord}</p>);
};

export default SearchResultDef;
