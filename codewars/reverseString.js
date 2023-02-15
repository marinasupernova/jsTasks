function solution(str){
    let result = '';
    console.log(str.length)


    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
  
}


console.log(solution('world'))