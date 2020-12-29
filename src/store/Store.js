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
    const re = new RegExp(`^${this.currentWord}`, "i");
    return this.wordList.filter((d) => re.test(d)).length ?? 0;
  }

  get endLetterCount() {
    const re = new RegExp(`${this.currentWord}$`, "i");
    return this.wordList.filter((d) => re.test(d)).length ?? 0;
  }

  get timesIncludedCount() {
    let len = 0;
    const re = new RegExp(this.currentWord, "i");
    this.wordList.forEach((element) => {
      if (element.match(re)) {
        len += element.match(re).length;
      }
    });
    return len;
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
