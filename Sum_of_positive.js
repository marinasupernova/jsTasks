function positiveSum(arr) {
    if (arr === []){
        return 0
    }
    total_sum = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            total_sum += arr[i];  
        }
    }
    return total_sum
}

console.log(positiveSum([1,-2,3,4,5]))