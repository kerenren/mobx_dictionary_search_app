/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { observer } from "mobx-react";

import SearchResultTitle from "./SearchResultTitle";
import DefItem from "./DefItem"
import { mq } from "../store/mediaQuery";
import DefNotFound from "./DefNotFound";
import { StoreContext } from "../App";


const DefinitionsList = observer(() => {
    const store = useContext(StoreContext);

    const qualityDefinitionList = store.currentWordDef.filter(
        (defItem) => defItem.thumbs_down < 3
      );

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
            return (
           
            <DefItem defItem={defItem}/>
            );
          })}
        {store.currentWord && !qualityDefinitionList.length && <DefNotFound />}
      </ul>
    </>
  );
});

export default DefinitionsList