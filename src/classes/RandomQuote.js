import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaApi() {
    try {
      const response = await fetch(
        'https://quoteslate.vercel.app/api/quotes/random',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(response.status);
      }
      const { id, quote: text, author } = await response.json();
      return new Quote(id, text, author);
    } catch (err) {
      console.error(err);
    }
  }
}

export default RandomQuote;

лкулыа > +358442301938;
kristina: +358405887120;
