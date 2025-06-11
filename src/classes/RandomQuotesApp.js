import RandomQuote from './RandomQuote.js';
import Quote from './Quote.js';

class RandomQuoteApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;

    this.init();
  }

  displayRandomQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayRandomQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async randomQuoteViaAPIHandler() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaApi());
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.randomQuoteViaAPIHandler()
    );
  }
}

export default RandomQuoteApp;
