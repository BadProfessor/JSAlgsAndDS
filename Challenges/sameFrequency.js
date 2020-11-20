function sameFrequency(num1, num2) {
  let num1Frequency = {};
  let num2Frequency = {};

  while (num1 / 10 > 0) {
    let currentDigit = num1 % 10;

    num1 = parseInt(num1 / 10);
    num1Frequency[currentDigit] = ++num1Frequency[currentDigit] || 1;
  }

  while (num2 / 10 > 0) {
    let currentDigit = num2 % 10;

    num2 = parseInt(num2 / 10);
    num2Frequency[currentDigit] = ++num2Frequency[currentDigit] || 1;
  }

  for (const key in num1Frequency) {
    if (num1Frequency[key] !== num2Frequency[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
