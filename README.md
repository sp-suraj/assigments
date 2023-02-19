## Eqaim Assignment Challenge

This assignment consists of two problem statements as described below-

1. # Numbers With Increasing Digits

   The solution is added in the file: [numbersWithIncreasingDigits.js](./src\codingChallanges\numbersWithIncreasingDigits.js).
   Function excepts an input `digit`, which is the number of digits in number. It then checks all the number of given digit and counts only those numbers whose digits are in increasing order and then returns the count variable as the number of numbers having digits in increasing order. The tests are added in [numbersWithIncreasingDigits.test.js](./src\codingChallanges__tests__\numbersWithIncreasingDigits.test.js)

2. # Addition Steps
   The solution is added in the file: [additionSteps.js](./src\codingChallanges\additionSteps.js).
   This problem accepts any two numbers as input and finds all the steps involved in the addition of those numbers. It also tracks the carry and returns the total sum with steps as a `JSON` object. The tests are added in [additionSteps.test.js](./src\codingChallanges__tests__\additionSteps.test.js)

# How To Run

The solution is written without any use of external dependencies, except for running tests which uses [Jest](https://github.com/facebook/jest) as `devDependency`

```
npm install
npm run test
```

To run coverage, you can use

```
npm run test:cov
```
