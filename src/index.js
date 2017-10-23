const $ = require('jquery');

document.addEventListener("DOMContentLoaded", () => {
  $.ajax({
    url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
    method: 'GET'
  })
  .then((data) => {
    const wordAndFrequency = data.word;
    const word = Object.keys(wordAndFrequency)[0];
    const frequency = wordAndFrequency[word]
    // Now we have the data for story 1.
    // Next step is to append it to the DOM.
  })
})
