/**
 * @param {string[]} years
 *
 * @returns {number}
 */

 function getAverageAge(years) {
  
  console.log(years, years === [])
  if (years.length === 0) {
    return 0;
  }

  const ages = [];
  let totalSum = 0;
  let avrgAge = 0;
  let twoYears = '';
  let birthYear = 0;
  let deathYear = 0;

  for (let i = 0; i < years.length; i++) {
    twoYears = years[i].split('-');
    birthYear = Number(twoYears[0]);
    deathYear = Number(twoYears[1]);
    ages.push(deathYear - birthYear);
  }

  for (let i = 0; i < ages.length; i++) {
    totalSum += ages[i];
  }
  avrgAge = Math.round(totalSum / ages.length);

  return avrgAge;
}


// console.log(getAverageAge([
//   '1907-1997',
//   '1761-1833',
//   '1535-1582',
//   '1918-2012',
//   '1877-1968',
//   '1696-1724',
//   '1602-1642',
//   '1692-1743',
//   '1695-1762',
//   '1570-1636',
//   '1762-1807',
//   '1668-1731',
// ]))

console.log(getAverageAge([]))