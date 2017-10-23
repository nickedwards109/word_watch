$ = require('jquery');

class textProcessor {
  static handleWordCount() {
    $('.text-submission').find('button').on('click', (event) => {
      const paragraph = $('.text-submission').find('textarea').val();
      const words = paragraph.split(' ');
      console.log(words)
      // next step is to count the words
    })
  }
}

module.exports = textProcessor;
