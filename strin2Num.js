function stringToNumber(str){

    let convstr = str.split('');
    let result = '';

    for (let i = 0; i < convstr.length; i++) {
        result += convstr[i]

    }

    return Number(result);
  }

console.log(stringToNumber("1234"));
console.log(stringToNumber("-7"));

var stringToNumber = function(str){
    // put your code here
    return null;
  }