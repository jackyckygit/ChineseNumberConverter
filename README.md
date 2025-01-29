# Chinese Number Converter

This project provides a utility function to convert Chinese numbers to Arabic numerals.

## Installation

To install the necessary dependencies, run:

```sh
npm install
```

## Usage

To use the `convertChineseNumber` function, import it into your JavaScript file and call it with a Chinese number string:

```javascript
const { convertChineseNumber } = require('./tools');

const arabicNumber = convertChineseNumber('一千二百三十四');
console.log(arabicNumber); // Output: 1234
```

## Testing

To run the tests, use the following command:

```sh
npm test
```

## Project Structure

- `tools.js`: Contains the `convertChineseNumber` function.
- `tools.test.js`: Contains the unit tests for the `convertChineseNumber` function.
- `package.json`: Contains the project dependencies and scripts.
- `README.md`: This file.

## License

This project is licensed under the MIT License.