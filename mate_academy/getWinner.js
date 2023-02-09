/**
 * @param {string|number} maxSolved
 * @param {string|number} romanSolved
 *
 * @returns {string}
 */
// write code here


function getWinner(maxSolved, romanSolved) {
  const maxNum = Number(maxSolved);
  const romanNum = Number(romanSolved);

  if (maxNum > romanNum) {
    return 'Max is the winner!!!'
  }
  else {
    return 'Roman is the winner!!!'
  }
}

console.log(getWinner('10', 17))