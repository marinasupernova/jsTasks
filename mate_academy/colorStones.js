/**
 * @param {string} stones
 *
 * @returns {number}
 */
function colorStones(stones) {
  
  let counter = 0;
  for (let i =0; i < stones.length; i++ ) {
     if (stones[i]=== stones[i+1]){
      counter +=1;
     }
     else {
      continue;
     }
  }
  return counter;
  }
  console.log(colorStones("RRRRGGGGBBBB"))