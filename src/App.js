import React, { createContext, useEffect } from "react";
import ReactDom from "react-dom";

import "./App.css";
import storeInstance from "./store/Store";
import Comparison from "./components/Comparison"
import SearchForm from "./components/SearchForm";
import SearchResultDef from "./components/SearchResultDef";

export const StoreContext = createContext();

function App() {

  return (
    <StoreContext.Provider value={storeInstance}>
      <div className="App">Kelly's dictionary app</div>
      <SearchForm />
      <Comparison />
      <SearchResultDef />
    </StoreContext.Provider>
  );
}

export default App;
