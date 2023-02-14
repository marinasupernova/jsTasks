function smash(words) {
    let sentence = []
    sentence = sentence.concat(words)
    sentence = sentence.join(' ')
    return sentence
}
    // let joinedWords = []

    // joinedWords = words.join('')
    
    // return joinedWords
    // for (let i =0; i < words.length; i++){
    //     sentence.push(words[i] + ' ' + words[i+1]);

    // }
//     let sentence = [];
//     for (let word of words) {
//          sentence += words[word] + ' ' + words[word];
//     }
//      return sentence
  
//  }
 
// function smash(words) {
//     let sentence = concat(words)
//     return sentence
// }


console.log(smash(['hello', 'world', 'this', 'is', 'great']))