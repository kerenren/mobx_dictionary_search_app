import { makeAutoObservable } from "mobx";

import { wordsArray } from "./API";

class Store {
  wordList = wordsArray;
  currentWord = "";
  currentWordDef = [];

  updateWord(newWord) {
    this.currentWord = newWord;
  }

  updateCurrentDefinition(defList) {
    this.currentWordDef = defList;
  }

  get wordsCount() {
    return this.currentWord.length;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const storeInstance = new Store();

export default storeInstance;
