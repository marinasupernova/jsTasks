function isAlphabet(letters) {
  let userLetters = letters.toLowerCase();

  for (i = 0; i < userLetters.length - 1; i++) {
    let firstLettercharCode = userLetters[i].charCodeAt();
    let nextLettercharCode = userLetters[i + 1].charCodeAt();
    if (firstLettercharCode !== nextLettercharCode) {
      if (nextLettercharCode !== firstLettercharCode + 1) {
        return false
      }
    }
  }
  return true
}

console.log(isAlphabet('opqz'))