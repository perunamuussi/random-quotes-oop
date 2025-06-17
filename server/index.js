import express from 'express';
import quotes from './data/quotes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Example appp listening on port ${PORT}`);
});
