
// - найти макс значение в массиве


function maxValue(nums) {
    let currentMax = 0;

    if (nums[0] > nums[1]) {
        currentMax = nums[0];
        
    }
    else {
        currentMax = nums[1];
    }

    for (let i = 2; i < nums.length; i ++) {
        if (nums[i] > currentMax) {
            currentMax = nums[i]

        }
        
    }

    return currentMax;
}

console.log(maxValue([1, 2, 588, 3, 4, 5, 11199999, 76]))