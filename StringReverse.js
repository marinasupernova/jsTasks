// - реверс строки





function stringReverse(string) {
    let reversedStr = '';

    for ( let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i]
    }

    return reversedStr

}

console.log(stringReverse('hello'))