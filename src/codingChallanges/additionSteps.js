const stepsOfSum = (n1, n2) => {
  let obj = {};
  let digitSum = 0,
    carry = "",
    sum = "",
    carryString = "",
    sumString = "";
  let length = (n1 + n2).toString().length;

  for (let i = 1; i <= length; i++) {
    digitSum = (n1 % 10) + (n2 % 10) + +carry;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    carry = digitSum / 10 < 1 ? 0 : Math.floor(digitSum / 10);

    sum = digitSum % 10;
    sumString = sum + sumString;
    if (carry !== 0) carryString += carry;

    obj[`step${i}`] = { carryString, sumString };
  }

  return obj;
};

stepsOfSum(45, 87965);

module.exports = { stepsOfSum };
