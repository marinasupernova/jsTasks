/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 *
 * @returns {boolean}
 */



// function canTheyBook(adultsCount, childrenCount) {
//   if (adultsCount > 0 && adultsCount <= 8 || adultsCount + childrenCount <= 8 && adultsCount >= 1 && childrenCount % adultsCount === 0) {
//     return true;
//   } else {
//     return false
//   }
// }

// 1 version
// function canTheyBook(adultsCount, childrenCount) {
//   switch (true) {
//     case adultsCount < 1:
//       return false;
//     case adultsCount > 8:
//       return false;
//     case adultsCount + childrenCount > 8:
//       return false;
//     case childrenCount / adultsCount > 2:
//       return false;
//     default:
//       return true;
//   }
// }

function canTheyBook(adultsCount, childrenCount, babiesCount) {

  switch (true) {
    case adultsCount < 1:
      return false;
    case adultsCount > 8:
      return false;
    case adultsCount + childrenCount > 8:
      return false;
    case childrenCount / adultsCount > 2:
      return false;
    
    case adultsCount + babiesCount > 9:
      return false;
    case (childrenCount + babiesCount) / adultsCount > 2:
      return false;
    default:
      return true;
  }
}

console.log(canTheyBook(1, 2, 0))