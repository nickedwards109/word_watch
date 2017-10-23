$ = require('jquery');

class textProcessor {
  static handleWordCount() {
    $('.text-submission').find('button').on('click', (event) => {
      console.log('In the click handler for:')
      console.log(event.target)
    })
  }
}

module.exports = textProcessor;
