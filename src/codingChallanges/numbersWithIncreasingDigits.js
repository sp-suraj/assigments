const numbersWithSmallerLeftDigit = (digit) => {
  if (digit === 1) {
    return 0;
  }
  // n= number of digits till we have to check that its right digits are greater than left digits
  let length = Math.pow(10, digit);
  let j = Math.pow(10, digit - 1);
  let count = 0;
  let key = 0,
    arr = [];

  for (j; j < length; j++) {
    let i = j;
    let rightMost = i % 10;
    i = Math.floor(i / 10);
    while (i > 0) {
      let right = i % 10;
      i = Math.floor(i / 10);
      if (right >= rightMost) {
        key = 1;
        break;
      }
      rightMost = right;
    }
    if (key === 0) {
      count++;
      arr.push(j);
    }
    key = 0;
  }
  return count;
};

module.exports = {
  numbersWithSmallerLeftDigit,
};
