/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 * @param {number} babiesCount
 *
 * @returns {string}
 */
function recommendRoom(adultsCount, childrenCount, babiesCount) {

  let roomType = ''
  let roomCapacity = 0;

  if (adultsCount + childrenCount < 4) {
    roomType = 'small room';
    roomCapacity = 4;
  } else {
    roomType = 'big room';
    roomCapacity = 8;
  }

  if (adultsCount + childrenCount + babiesCount > roomCapacity) {
    roomType += ' + extra bed';
  }
  return roomType;

}

console.log(recommendRoom(2, 1, 1))