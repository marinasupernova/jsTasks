function XO(str) {
    let xCounter = 0;
    let oCounter = 0;

    for ( let i =0; i < str.length; i++ ) {



        if (str[i]=== 'o' || str[i]=== 'O' ) {
            oCounter += 1;
        }
        if (str[i]=== 'x' || str[i]=== 'X' ) {
            xCounter += 1;
        }
    }
    if (xCounter === oCounter ) {
        return true;
    }
    else {
        return false;
    }
}

console.log( XO('xo'))
console.log( XO('xxOo'))
console.log( XO('xxxm'))
console.log( XO('Oo'))
console.log( XO('zpzzp'))