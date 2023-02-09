/**
 * @param {string} guestsInput
 *
 * @returns {number}
 */
// write code here

function getGuestsCount(guestsInput) {
  let result = '';

  for (let i = 0; i < guestsInput.length; i++) {
    if(guestsInput[i] === ' ' || guestsInput[i] ==='\t' || guestsInput[i] === '\n') {
      continue;
    }
    if ('0123456789'.includes(guestsInput[i])) {
      result += guestsInput[i];
    } else {
      if (result !== '') {
        result = Number(result);
      } else {
        result = 'not a number';
      }
      break;
    }
  }

  return result;
}

console.log(getGuestsCount("     1 person"))