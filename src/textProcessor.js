$ = require('jquery');

class textProcessor {
  static handleWordCount() {
    $('.text-submission').find('button').on('click', (event) => {
      const paragraph = $('.text-submission').find('textarea').val();
      const words = paragraph.split(' ');
      const wordCounts = textProcessor.count(words);
      console.log(wordCounts)
      // wordCounts is an object with keys representing words and values representing that word's count. 
    })
  }

  static count(words) {
    const wordCounts = {};
    words.forEach((word) => {
      if (!wordCounts.hasOwnProperty(word)) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word] += 1;
      }
    })
    return wordCounts;
  }
}

module.exports = textProcessor;
