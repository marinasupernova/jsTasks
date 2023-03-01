function invert(array) {
    let result = [];
    if (array === []){
        return [];
    }

    for (i =0; i < array.length; i++) {
        result.push(array[i] * -1)
    }
    return result; 
 }

console.log(invert([0]))