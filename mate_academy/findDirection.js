/**
 * @param {string} direction
 *
 * @returns {string}
 */

function getDirection(direction) {
  let hor = 0;
  let ver = 0;
  switch (direction) {
    case 'forward':
      return 'hor=0, ver=1';
    case 'left':
      return 'hor=-1, ver=0';
    case 'right':
      return 'hor=1, ver=0';
    case 'back':
      return 'hor=0, ver=-1';
    default:
      return 'hor=0, ver=0';
  }
}

console.log(getDirection("back"))