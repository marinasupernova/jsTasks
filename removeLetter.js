function removeLetter(word, letter) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== letter) {
      result += word[i]
    }
  }

  return result;
}

console.log(removeLetter('abracadabra', 'r'))