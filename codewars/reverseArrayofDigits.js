// function digitize(n) {
//     let result = [];
//     n = n.toString();
//     for (let i =0; i < n.length; i++) {
//         result.push(n[i])

//     }
//     return result.reverse();
//   }

function digitize(n) {
    return n.toString().split('').reverse().map(Number)
}

  console.log(digitize(35231))

  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }