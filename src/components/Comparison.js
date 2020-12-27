import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import { StoreContext } from "../App";

const Comparison = observer(() => {
  const store = useContext(StoreContext);
  const letter = () => {
    return <span>{store.currentWord}</span>;
  };

  return (
    <div>
      {store.currentWord && (
        <>
          {" "}
          <h1>Stats</h1>
          <p>
            Words that start with "{letter()}" : {store.startLetterCount()}{" "}
          </p>
          <p>
            Words that end with "{letter()}" : {store.endLetterCount()}
          </p>
          <p>
            Times that "{letter()}" appears in dictionary:
            {store.timesIncludedCount()}
          </p>
          <p>
            Words that have the same letter repeated in conjunction:
            {store.repeatedLetterCount()}
          </p>{" "}
        </>
      )}
    </div>
  );
});

export default Comparison;
