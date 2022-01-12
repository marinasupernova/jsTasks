// - проверить что все числа в массиве больше 3

function checkNums(nums) {

    let result = false;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > 3){
            result = true
        }
    }
    return result;

}

console.log(checkNums([0, 1, 2]))