function removeZeros(number) {
  if (number === 0) {
    return number
  }

  let result = '';

  let digits = number.toString().split('');


  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== '0') {
      result += digits[i];
    }
  }
  return result
}



console.log(removeZeros(000))