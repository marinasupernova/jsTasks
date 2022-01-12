// - посчитать среднее значение в массиве

function getAverage(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }

    result = result / nums.length

    return result
}

console.log(getAverage([1, 2, 3, 4, 5]))