function removeNoise(str) {
    let result = '';
    const noise = '%$&/#·@|º\ª';
    for (let i = 0; i < str.length; i++) {
        if (! noise.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeNoise("h%e&·%$·llo w&%or&$l·$%d"))