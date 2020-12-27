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

  wordsCount() {
    return this.currentWord.length;
  }

  startLetterCount() {
    const re = new RegExp(`^${this.currentWord}`, "ig");
    return this.wordList.filter((d) => re.test(d)).length;
  }

  endLetterCount() {
    const re = new RegExp(`${this.currentWord}$`, "ig");
    return this.wordList.filter((d) => re.test(d)).length;
  }

  timesIncludedCount() {
    return this.wordList.filter((d) => d.includes(this.currentWord)).length;
  }

  repeatedLetterCount() {
    return this.wordList.filter((d) => d.match("^.*(.)\\1{1}.*$")).length;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const storeInstance = new Store();

export default storeInstance;
