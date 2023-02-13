function getOutdated(robots, newVersion) {
    const listOfRobotIndexes = [];
    for (const index in robots) {
        const robot = robots[index];
        if (robot.coreVersion < newVersion) {
            listOfRobotIndexes.push(index)
        }
    }
    return listOfRobotIndexes;
}

const robots = [
    { coreVersion: 9 },
    { coreVersion: 13 },
    { coreVersion: 16 },
    { coreVersion: 9 },
    { coreVersion: 14 },
  ];

console.log(getOutdated(robots, 11))
