// - посчитать гласные с слове

function countVowels(word) {
    let count = 0;
    const vowels = 'aouei';

    let sepVowels = vowels.split('');

    console.log(sepVowels)

    for (let i = 0; i < word.length; i ++) {
        for (let x = 0; x < sepVowels.length; x ++){
            if (word[i]=== sepVowels[x] ) {
                count += 1;
            }
        }
        }
        return count
    }



console.log(countVowels('Marina'))