function persistence(num) {
    let counter = 0;


    while (num > 9) {
        counter++;

        let nums = String(num).split('').map(Number);
        num = 1;

        for (let i = 0; i < nums.length; i++) {
            num *= nums[i];
        }
    }

    return counter
}
console.log(persistence(39))