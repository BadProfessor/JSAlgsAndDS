function factorial(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;

    console.log(total);
  }
  return total;
}

factorial(3);
