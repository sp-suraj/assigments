const { stepsOfSum } = require("../additionSteps");

describe("test for finding steps in the sum of two numbers", () => {
  test("it should return the steps of sum of 2 numbers with same digit numbers", () => {
    let n1 = 1489,
      n2 = 1714;
    let result = {
      step1: { carryString: "1", sumString: "3" },
      step2: { carryString: "11", sumString: "03" },
      step3: { carryString: "111", sumString: "203" },
      step4: { carryString: "111", sumString: "3203" },
    };
    expect(stepsOfSum(n1, n2)).toMatchObject(result);
  });

  test("it should return steps of sum of 2 numbers of different number of digits", () => {
    let n1 = 45,
      n2 = 87965;
    let result = {
      step1: { carryString: "1", sumString: "0" },
      step2: { carryString: "11", sumString: "10" },
      step3: { carryString: "111", sumString: "010" },
      step4: { carryString: "111", sumString: "8010" },
      step5: { carryString: "111", sumString: "88010" },
    };
  });
  test("it should return the correct number of steps when one number is zero", () => {
    let n1 = 0,
      n2 = 3246;
    let result = {
      step1: { carryString: "", sumString: "6" },
      step2: { carryString: "", sumString: "46" },
      step3: { carryString: "", sumString: "246" },
      step4: { carryString: "", sumString: "3246" },
    };
    expect(stepsOfSum(n1, n2)).toMatchObject(result);
  });
});
