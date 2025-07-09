import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';
import { config } from '../config.js';
class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicApi() {
    const url = `${config.PUBLIC_API_URL}/api/quotes/random`;
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.status);
      }
      if (typeof response === 'object') {
        const { id, quote: text, author } = await response.json();
        if (id && text && author) {
          return new Quote(id, text, author);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async getRandomQuoteViaOwnApi() {
    const url = `${config.LOCAL_API_URL}/quotes/random-single`;
    const headers = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const { id, text, author } = await (await fetch(url, headers)).json();
      return new Quote(id, text, author);
    } catch (err) {
      console.log(err);
    }
  }
}

export default RandomQuote;
