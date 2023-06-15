# Quotes API

This is a simple Express.js application that provides an API to retrieve random quotes and manage a collection of quotes. It uses a JSON file to store the quotes.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 14 or above)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/tnowad/quotes-api.git
   ```

2. Change to the project directory:

   ```bash
   cd quotes-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

## API Endpoints

The API provides the following endpoints:

- `GET /api/quote`: Retrieves a random quote from the collection.
- `GET /api/quotes`: Retrieves all quotes in the collection.
- `POST /api/quotes`: Adds a new quote to the collection.

## Data Format

The quotes are stored in a JSON file (`quotes.json`) in the following format:

```json
[
  {
    "author": "Author 1",
    "quote": "Quote 1"
  },
  {
    "author": "Author 2",
    "quote": "Quote 2"
  }
]
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request to the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was created as a sample application for demonstration purposes.
