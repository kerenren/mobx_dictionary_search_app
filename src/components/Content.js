/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { observer } from "mobx-react";

import DefinitionContent from "./DefinitionContent";
import { mq } from "../store/mediaQuery";
import StatsContent from "./StatsContent";
import StartSearch from "./StartSearch";
import { StoreContext } from "../App";

const Content = observer(() => {
  const store = useContext(StoreContext);
  return (
    <div
      css={mq({
        width: "90%",
        height: ["100%", "80%", "70%"],
        margin: [0, "30px auto"],
        display: "flex",
        justifyContent: "flex-start",
        alignItems: ["flex-start", "flex-start", "center"],
        flexDirection: ["column", "column", "row"],
        boxShadow: "0 2px 2px 0 rgba(0,0,0,0.12)",
        padding: ["24px", "32px", "40px", "50px"],
        textAlign: "left",
        borderRadius: "6px",
        backgroundColor: "white",
        overflowY: "auto",
        overflowX:["hidden", "auto"],
        "&:hover": {
          boxShadow:
            "0 8px 10px 1px rgba(0,0,0,0.07), 0 3px 14px 3px rgba(0,0,0,0.06), 0 4px 5px 0 rgba(0,0,0,0.1);",
        },
      })}
    >
      {!store.currentWord && <StartSearch />}
      {store.currentWord && <StatsContent />}
      {store.currentWord && <DefinitionContent />}
    </div>
  );
});

export default Content;
