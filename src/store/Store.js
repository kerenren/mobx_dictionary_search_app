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

  get startLetterCount() {
    const re = new RegExp(`^${this.currentWord}`, "ig");
    console.log(this.wordList.filter((d) => re.test(d)))
    return this.wordList.filter((d) => re.test(d)).length ?? 0;
  }

  get endLetterCount() {
    const re = new RegExp(`${this.currentWord}$`, "ig");
    return this.wordList.filter((d) => re.test(d)).length ?? 0;
  }

  get timesIncludedCount() {
    return (
      this.wordList.filter((d) => d.includes(this.currentWord)).length ?? 0
    );
  }

  get repeatedLetterCount() {
    return this.wordList.filter((d) => d.match("^.*(.)\\1{1}.*$")).length ?? 0;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const storeInstance = new Store();

export default storeInstance;
