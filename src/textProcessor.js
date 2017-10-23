$ = require('jquery');

class textProcessor {
  static handleWordCount() {
    $('.text-submission').find('button').on('click', (event) => {
      const paragraph = $('.text-submission').find('textarea').val();
      const words = paragraph.split(' ');
      const wordCounts = textProcessor.count(words);
      const sortedKeys = textProcessor.sortByCount(wordCounts);
      console.log(sortedKeys)
      // textProcessor.appendWordsByCount(wordCounts);
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

  static sortByCount(wordCounts) {
    const keys = Object.keys(wordCounts);
    const sortedKeys = keys.sort((a, b) => { return wordCounts[a] - wordCounts[b] });
    return sortedKeys;
  }

  // static appendWordsByCount(wordCounts) {
  //   Object.entries(wordCounts).forEach((wordCount) => {
  //     const word = wordCount[0];
  //     const count = wordCount[1];
  //     debugger
  //   })
  // }
}

module.exports = textProcessor;
