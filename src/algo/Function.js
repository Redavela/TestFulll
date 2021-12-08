const increment = (numbers) => {
  numbers.reverse();
  numbers[0] += 1;
  if (numbers[0] === 10) {
    numbers.forEach((number, index) => {
      if (number === 10) {
        numbers[index] = 0;
        if (numbers[index + 1]) {
          numbers[index + 1] += 1;
        } else {
          numbers[index + 1] = 1;
        }
      }
    });
  }
  return numbers.reverse();
};
console.log(increment([9, 9, 0]));
