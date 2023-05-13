import express from 'express';
import quotes from './quotes.json';
const app = express();

interface Quote {
  author: string;
  quote: string;
}

const data: Quote[] = quotes;

app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(3000, () => {
  console.log('Server is running on port: 3000');
});
