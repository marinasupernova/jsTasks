function moveZeros(arr) {
    let zeroCounter = [];
    let newArray = []
    for ( let i = 0; i < arr.length; i++){
        if (arr[i]=== 0 ){
            zeroCounter.push(arr[i]); 
        }
        else {
            newArray.push(arr[i])

        }
    }

    return newArray.concat(zeroCounter)
  }

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))