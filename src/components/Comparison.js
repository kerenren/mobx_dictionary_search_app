import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import { StoreContext } from "../App";

const Comparison = observer(() => {
  const store = useContext(StoreContext);

  return (
    <div>
      <h1>Stats</h1>
      <p>Words that start with the letter: {store.startLetterCount()} </p>
      <p>Words that end with the letter: {store.endLetterCount()}</p>
      <p>
        Times that the letter appears in dictionary:
        {store.timesIncludedCount()}
      </p>
      <p>
        Words that have the same letter repeated in conjunction:{" "}
        {store.repeatedLetterCount()}
      </p>
    </div>
  );
});

export default Comparison;
