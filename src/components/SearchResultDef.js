/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import SearchResultTitle from "./SearchResultTitle";
import { getDefByWord } from "../store/API";
import { mq } from "../store/mediaQuery";
import { StoreContext } from "../App";

const SearchResultDef = observer(() => {
  const store = useContext(StoreContext);

  const updateDefinitions = async (word) => {
    const wordDef = await getDefByWord(word);
    if (wordDef) {
      store.updateCurrentDefinition(wordDef.list);
    }
  };

  const qualityDefinitionList = store.currentWordDef.filter(
    (defItem) => defItem.thumbs_down < 3
  );

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
        justifyContent:"flex-start"
      })}
    >

        <SearchResultTitle title="Definition" />
      

      <ul
        css={mq({
          width: "100%",
          height:"100%",
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
        {store.currentWordDef && qualityDefinitionList.length > 0 && (
          qualityDefinitionList.map((defItem) => {
            return (
              <li
                key={defItem.defid}
                css={{
                  transition: "linear 0.25s",
                  lineHeight: 1.58,
                  "&:hover": {
                    background:
                      "linear-gradient(167deg, rgba(117,145,209,1) 0%, rgba(41,65,122,1) 46%, rgba(24,25,25,1) 100%)",
                    color: "#FDC05D",
                    fontWeight: "bolder",
                  },
                  boxShadow:
                    "0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05)",
                  borderRadius: "0 0.5rem 0 0.5rem",
                  margin: "1.75rem 0",
                  padding: "1rem",
                }}
              >
                {defItem.definition}
              </li>
            );
          })
        ) }
       {store.currentWord && !qualityDefinitionList.length &&
        (
          <div css={{ height: "100%" }}>
            <div css={{ lineHeight: 1.58 }}>
              👀 The current searched word definition is not available or qualified enough, please
              try another word.
            </div>
            <img
              src="not-found.jpg"
              alt="not found image"
              css={{ width: "100%" }}
            />
          </div>
        )}
      </ul>
    </div>
  );
});

export default SearchResultDef;
