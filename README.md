# Age Calculator

A versatile JavaScript library for calculating age, zodiac sign, and next birthday. It provides functionality to determine age in years, months, days, hours, and minutes, and includes zodiac sign details.

## Features

- Calculate age in years, months, days, hours, and minutes.
- Determine the next birthday with remaining days, hours, and minutes.
- Retrieve zodiac sign and its description.
- Check if the birth year is a leap year.

## Installation

To install the package, use npm:

```bash
npm install advance-age-calculator
```
## Or,
```
<script src="https://unpkg.com/advance-age-calculator@1.1.1/dist/index.js"></script>
```

## Uses

```bash
const { calculateAge } = require('advance-age-calculator');
```
### Or,

```bash
import { calculateAge } from 'advance-age-calculator';
```

### After importing 
```
try {
  const birthDate = 'YYYY-MM-DD';
  const age = calculateAge(birthDate);
  console.log(age)
} catch (error) {
  console.error(error.message);
}
```


