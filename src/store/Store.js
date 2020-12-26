import { makeAutoObservable } from "mobx";

import { wordsArray } from "./API";

class Store {
  wordList = wordsArray;
  currentWord = "";

  updateWord(newWord) {
    this.currentWord = newWord;
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
