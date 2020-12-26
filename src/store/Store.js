import { observable, action, computed, makeObservable } from "mobx";

class Store {
  @observable words = [];

  @action updateWords(newWord) {
    this.words.push(newWord);
  }

  @computed get wordsCount() {
    return this.words.length;
  }
  constructor() {
    makeObservable(this);
  }
}

const storeInstance = new Store();

export default storeInstance;
