import express, { Request, Response } from 'express';
import quotes from './quotes.json';

const app = express();

interface Quote {
  author: string;
  quote: string;
}

const data: Quote[] = quotes;

app.get('/api/quote', (_req: Request, res: Response) => {
  const randomQuote: Quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.get('/api/quotes', (_req: Request, res: Response) => {
  res.json(quotes);
});

app.listen(3000, () => {
  console.log('Server is running on port: 3000');
});
