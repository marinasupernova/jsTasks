// - выбрать все большие буквы ив слове

function AllCapitalLetter(string) {

    let result = '';
    const allLowerCase = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if (allLowerCase[i] !== string[i]) {
            result += string[i];
        }

    }

    return result;
}

console.log(AllCapitalLetter('MaRiNa'))