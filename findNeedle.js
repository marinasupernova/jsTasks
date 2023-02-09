function findNeedle(haystack) {
    
    let position = 0;
    
    for (let i = 0; i < haystack.length; i++ ) {
        if (haystack[i] === 'needle') {
            position = haystack.indexOf('needle');

        }
    }

    const phrase = `found the needle at position ${position}`;
    return phrase;

  }

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))