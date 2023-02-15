function sumMix(x){
    let result = 0;
    for (let i = 0; i < x.length; i++){
        result = result + Number(x[i]);
    }
    return result;
}

console.log(sumMix([9, 3, '7', '3']))