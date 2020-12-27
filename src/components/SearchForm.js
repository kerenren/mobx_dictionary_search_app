/** @jsxImportSource @emotion/react */

import React from "react";

import { StoreContext } from "../App";

const SearchForm = () => {
  let searchTerm;
  const handleSubmit = (e, store) => {
    e.preventDefault();
    if (!searchTerm.value) {
      alert("search term is required");
    } else {
      store.updateWord(searchTerm.value);
      searchTerm.value = "";
    }
  };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <form
          css={{
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "center",
            fontSize: "16px",
          }}
          onSubmit={(e) => handleSubmit(e, store)}
        >
          <input
            css={{
              borderRadius: "20px",
              boxShadow: "inset 1px 1px 2px 0 rgba(0,0,0,0.1)",
              width: "100%",
              padding: "10px",
              outline: 0,
            }}
            type="text"
            id={"searchTerm"}
            className="form-control"
            placeholder={"Search English"}
            ref={(node) => {
              searchTerm = node;
            }}
          />

          <button
            type="submit"
            value="Submit"
            css={{
              width: "40px",
              height: "40px",
              verticalAlign: 0,
              borderRadius: "50%",
              backgroundColor: "#FCA311",
              color: "#000000",
              marginLeft: "10px",
              borderColor: "transparent",
              "&:hover": {
                cursor: "pointer",
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <i className="fas fa-search"></i>{" "}
          </button>
        </form>
      )}
    </StoreContext.Consumer>
  );
};

export default SearchForm;
