import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicApi() {
    try {
      const response = await fetch(
        'https://quoteslate.vercel.app/api/quotes/random',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

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
    const url = 'http://localhost:3000/quotes/random-single';
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
