$ = require('jquery');

class textProcessor {
  static handleWordCount() {
    $('.text-submission').find('button').on('click', (event) => {
      const paragraph = $('.text-submission').find('textarea').val();
      const words = paragraph.split(' ');
      const wordCounts = textProcessor.count(words);
      const sortedKeys = textProcessor.sortByCount(wordCounts);
      textProcessor.appendWordsByCount(wordCounts, sortedKeys);
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

  static appendWordsByCount(wordCounts, sortedKeys) {
    let fontSize = 1;
    sortedKeys.forEach((key) => {
      if (wordCounts[key] === 1) {
        const formattedWord = `
          <p style="font-size: ${fontSize}em">${key}</p>
        `;
        $('.word-count').append(formattedWord)
      } else {
        fontSize += 0.5;
        const formattedWord = `
          <p style="font-size: ${fontSize}em">${key}</p>
        `;
        $('.word-count').append(formattedWord)
      }
    })
  }
}

module.exports = textProcessor;
