function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));