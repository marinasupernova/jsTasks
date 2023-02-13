/**
 * @param {Object} robot1
 * @param {Object} robot2
 *
 * @returns {boolean}
 * 
 */



const compareRobots = (robot1, robot2) => {
  const robot1keys = Object.keys(robot1);
  const robot2keys = Object.keys(robot2);

  if (robot1keys.length !== robot2keys.length) {
    return false;
  }

  for (const key of robot1keys) {
    if (key === "serialNo") {
      continue;
    }
    if (robot1[key] !== robot2[key]) {
      return false;
    }
  }
  return true;
}

const charlie = { serialNo: 1, chipVer: 12 };

// const lordy = { serialNo: 2, chipVer: 12 };
// compareRobots(charlie, lordy); // true

const paul = { serialNo: 3, chipVer: 15 };
console.log(compareRobots(paul, charlie)); // false

// const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
// compareRobots(mike, charlie); // false

// const max = { serialNo: 5, engineVer: 12 };
// compareRobots(max, charlie); // false

// const steve = { serialNo: 6 };
// compareRobots(steve, charlie); // false
