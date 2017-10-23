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
}

module.exports = httpService;
