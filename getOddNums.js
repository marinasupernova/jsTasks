function getOddNumbers(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 1 || numbers[i] % 2 < 1) {
      result.push(numbers[i])
    }
  }
  return result;
}

console.log(getOddNumbers([1, 5, 7, 9, 24]))