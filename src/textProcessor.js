$ = require('jquery');
const httpService = require('./httpService');

class textProcessor {
  static handleWordCount() {
    $(document).keypress((event) => {
      if (event.which == 13) {
        textProcessor.getAndAppendWords();
      }
    });
    $('.text-submission').find('button').on('click', (event) => {
      textProcessor.getAndAppendWords();
    });
  }

  static getAndAppendWords() {
    const paragraph = $('.text-submission').find('textarea').val();
    const words = paragraph.split(' ');
    httpService.postAll(words);

    const wordCounts = textProcessor.count(words);
    const sortedKeys = textProcessor.sortByCount(wordCounts);
    textProcessor.appendWordsByCount(wordCounts, sortedKeys);
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

  static appendWordsByCount(wordCounts, sortedKeys) {
    let fontSize = 1;
    sortedKeys.forEach((word) => {
      if (wordCounts[word] === 1) {
        textProcessor.sizeAndAppend(word, fontSize)
      } else {
        fontSize += 0.5;
        textProcessor.sizeAndAppend(word, fontSize)
      }
    })
  }

  static sizeAndAppend(word, fontSize) {
    const formattedWord = `
      <p style="font-size: ${fontSize}em">${word}</p>
    `;
    $('.word-count').append(formattedWord)
  }
}

module.exports = textProcessor;
