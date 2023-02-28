/**
 * @param {string} boxes
 *
 * @returns {Object}
 */
function countBoxes(boxes) {
  let result = {};

  for (let i=0; i < boxes.length; i++){
    result[boxes[i]] = 1;
  }
  return result
    
  }

console.log(countBoxes('aabca'))