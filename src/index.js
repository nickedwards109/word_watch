const httpService = require('./httpService');
const textProcessor = require('./textProcessor');

document.addEventListener("DOMContentLoaded", () => {
  httpService.getTopWord();
  textProcessor.handleWordCount();
})
