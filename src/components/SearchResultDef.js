/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import { StoreContext } from "../App";
import { getDefByWord } from "../store/API";
import PieChart from "./PieChart";
import { mq } from "../store/mediaQuery";

const SearchResultDef = observer(() => {
  const store = useContext(StoreContext);

  const updateDefinitions = async (word) => {
    const wordDef = await getDefByWord(word);
    if (wordDef) {
      store.updateCurrentDefinition(wordDef.list);
    }
  };

  const onDefinition = () => {
    console.log("on definition");
  };

  useEffect(() => {
    if (store.currentWord) {
      updateDefinitions(store.currentWord);
    }
  }, [store.currentWord]);

  return (
    <div
      css={mq({
        height: "100%",
        width: ["90%", "90%", "40%"],
      })}
    >
      {store.currentWordDef && (
        <div
          css={{
            textTransform: "uppercase",
            color: "#4183f2",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            lineHeight: "16px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={onDefinition()}
        >
          Definition
        </div>
      )}

      {/* <div css={{ height: "130px" }}>
        <PieChart />
      </div> */}
      <ul
        css={mq({
          width: "100%",
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
        {store.currentWordDef
          .filter((defItem) => defItem.thumbs_down < 10)
          .map((defItem) => {
            return (
              <li
                key={defItem.defid}
                css={{
                  transition: "0.25s",
                  "&:hover": {
                    backgroundColor: "#fafafa",
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
          })}
      </ul>
    </div>
  );
});

export default SearchResultDef;
