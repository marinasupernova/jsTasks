
// - найти мин значение в массиве

function minValue(nums) {
    let currentMin = 0;

    if (nums[0] > nums[1]) {
        currentMin = nums[1];
    }
    else {
        currentMin = nums[0];
    }

    for (let i = 2; i < nums.length; i++) {
        if (currentMin > nums[i]){
            currentMin = nums[i];
            
        }
    }

    return currentMin;

    
}

console.log(minValue([-1, 4, 3, 4, 5, -7]))