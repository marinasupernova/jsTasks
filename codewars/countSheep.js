var countSheep = function (num){
    let i = 1;
    let result = ''
    if (num === 0){
        return ''
    }
    while (i < num+1) {
        result += i + ' sheep...'
        i++;        
      }
    return result;
}



console.log(countSheep(8))


var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }