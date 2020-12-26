import React from "react";
import { StoreContext } from "../App";

const SearchForm = () => {
  let searchTerm;
  const handleSubmit = (e, store) => {
    e.preventDefault();
    store.updateWord(searchTerm.value);
    searchTerm.value = "";
  };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <form onSubmit={(e) => handleSubmit(e, store)}>
          <label>
            Search the word:
            <input
              type="text"
              id={"searchTerm"}
              className="form-control"
              placeholder={"Search a word ..."}
              ref={(node) => {
                searchTerm = node;
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </StoreContext.Consumer>
  );
};

export default SearchForm;
