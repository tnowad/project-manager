import express, { Request, Response } from 'express';
import quotes from './quotes.json';
import path from 'path';
import fs from 'fs';
const app = express();

interface Quote {
  author: string;
  quote: string;
}

app.get('/api/quote', (_req: Request, res: Response) => {
  const randomQuote: Quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.get('/api/quotes', (_req: Request, res: Response) => {
  res.json(quotes);
});

app.post('/api/quotes', (req: Request, res: Response) => {
  const { author, quote } = req.body;
  const newQuote: Quote = { author, quote };
  quotes.push(newQuote);
  saveQuotesToJSON();
  res.status(201).json(newQuote);
});

function saveQuotesToJSON() {
  const quotesPath = path.join(__dirname, 'quotes.json');
  const quotesJSON = JSON.stringify(quotes, null, 2);

  fs.writeFile(quotesPath, quotesJSON, (err) => {
    if (err) {
      console.error('Error writing quotes to file:', err);
    } else {
      console.log('Quotes saved to file.');
    }
  });
}

app.listen(3000, () => {
  console.log('Server is running on port: 3000');
});
