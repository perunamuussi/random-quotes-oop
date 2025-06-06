import RandomQuote from './RandomQuote.js';

class RandomQuoteApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;

    this.init();
  }

  displayRandomQuote() {
    const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = `"${text}"`;
    this.quoteAuthorElement.textContent = author;
  }

  generateRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayRandomQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.generateRandomQuote()
    );
  }
}

export default RandomQuoteApp;
