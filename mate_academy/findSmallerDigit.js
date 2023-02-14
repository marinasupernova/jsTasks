/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function countNextSmaller(numbers) {
   let newNums = [];

   for (let i = 0; i < numbers.length; i++ ){
    if (numbers[i] < numbers[i] )
   }

  }


console.log(countNextSmaller())

countNextSmaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
countNextSmaller([1, 2, 0]) === [1, 1, 0]
countNextSmaller([1, 1, -1, 0, 0]) === [3, 3, 0, 0, 0]
countNextSmaller([5, 4, 7, 9, 2, 4, 4, 5, 6]) === [4, 1, 5, 5, 0, 0, 0, 0, 0]
