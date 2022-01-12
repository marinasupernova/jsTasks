function removeZs(string) {
    let result = '';
  
    const letters = string.split('');
  
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== 'z' && letters[i] !== 's' && letters[i] !== 'Z' && letters[i] !== 'S') {
        result += letters[i];
      }
    }
  
    return result;
  }

console.log(removeZs('ZMzastSe AcaZzzzdemsSy'))