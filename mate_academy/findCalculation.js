/**
 * @param {number} a
 * @param {number} b
 * @param {number} res
 *
 * @returns {string}
 */

function findCalculationType(a, b, res) {
  switch (res) {
    case res === a / b:
      return "Division";
    case res === a - b:
      return "Substraction";
    case a * b === res:
      return "Multiplication";
    case res === a + b:
      return "Addition"
    default:
      return "";
  }
}

console.log(findCalculationType(3, 4, 12))