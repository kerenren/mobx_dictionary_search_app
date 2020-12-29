/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { observer } from "mobx-react";

import SearchResultTitle from "./SearchResultTitle";
import { mq } from "../store/mediaQuery";
import DefNotFound from "./DefNotFound";
import { StoreContext } from "../App";
import DefItem from "./DefItem";

const DefinitionsList = observer(() => {
  const store = useContext(StoreContext);

  const qualityDefinitionList = store.currentWordDef
    .filter((defItem) => defItem.thumbs_down < 3)
    .filter((defItem) => defItem.definition.length > 1);

  const isErrorMsg = () => {
    if (
      store.currentWordDef[0] === "failed to request" ||
      store.currentWord[0] === "missing definition" ||
      !qualityDefinitionList.length
    ) {
      return <DefNotFound />;
    } else return null;
  };

  return (
    <>
      <SearchResultTitle title="Definition" />

      <ul
        css={mq({
          width: "100%",
          height: "100%",
          wordWrap: "break-word",
          listStyle: "none",
          paddingLeft: "0",
          margin: "-16px 0",
          "&:after": {
            content: '""',
            display: "block",
            height: ["24px", "32px"],
          },
        })}
      >
        {store.currentWordDef &&
          qualityDefinitionList.length > 0 &&
          qualityDefinitionList.map((defItem) => {
            return <DefItem defItem={defItem} />;
          })}
        {isErrorMsg()}
      </ul>
    </>
  );
});

export default DefinitionsList;
