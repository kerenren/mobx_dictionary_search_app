import axios from "axios";

import config from "../config";

export const wordsArray = require("an-array-of-english-words");

export const getDefByWord = (word) => {
  return axios
    .request({
      method: "GET",
      url: config.api.URL,
      params: { term: word },
      headers: {
        "x-rapidapi-key": config.api.KEY,
        "x-rapidapi-host": config.api.HOST,
      },
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
    });
};
