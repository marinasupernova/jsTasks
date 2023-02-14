/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function getLeaders(numbers) {
  leaderArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    let sumOfTheRest = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      sumOfTheRest += numbers[j]

    }
    if (currentNumber > sumOfTheRest) {
      leaderArray.push(currentNumber);
    }
  }
  return leaderArray;
}

console.log(getLeaders([16,17,4,3,5,2]))


//arrayLeaders([1, 2, 3, 4, 0]) === [4]

// 4 is greater than the sum all the elements to its right side
// The last element 0 is equal to right sum of its elements

//arrayLeaders([16, 17, 4, 3, 5, 2]) === [17, 5, 2]

// 17 is greater than the sum all the elements to its right side
// 5 is greater than the sum all the elements to its right side
// The last element 2 is greater than the sum of its right elements
