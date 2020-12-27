# dictionary_search_app

A dictionary search APP, which is able to count search letters in the offline dictionary as well as get word definitions and other data from the Urban dictionary API. The state is managed by Mobx. This is a responsive APP written with emotion-react without any other CSS library or framework used.

## Get Started

- install relevant dependencies 
    `yarn`

- add Urban Dictionary API Key, Host and URL to src/config.js
  
- start the developing environment
    `yarn start`


## Features:
a UI that lets the user query the dictionary with different queries, such as -
- How many words start with the letter <LETTER>
- How many times does the letter <LETTER> appear in the dictionary?
- How many words end with the letter <LETTER>?
- How many words have the same letter repeated in conjunction? For instance, the word professor has `ss,` and for that, the count is 1
