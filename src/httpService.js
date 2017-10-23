const $ = require('jquery');

class httpService {
  static getTopWord() {
    $.ajax({
      url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
      method: 'GET'
    })
    .then((data) => {
      const wordAndFrequency = data.word;
      const word = Object.keys(wordAndFrequency)[0];
      const frequency = wordAndFrequency[word]
      $('.top-word').find('h3').text(`
        Top word from Word Watch API: ${word} (${frequency})
      `)
    })
  }

  static postAll(words) {
    words.forEach((word) => {
      $.ajax({
        url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
        method: 'POST',
        data: { word: { value: word } }
      })
      .then((response) => {
        console.log(response.message)
      })
    })
  }
}

module.exports = httpService;
