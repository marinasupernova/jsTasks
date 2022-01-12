function scrollingText(word) { 
    let result =[]; 
    for (let i = 0; i < word.length; i++){
        result.push(word.toUpperCase())
        word = firstLetterToEnd(word.toUpperCase());

    }
    return result
  }
  
function firstLetterToEnd(word) {
    word= word.substr(1, word.length) + word[0]
    return word;
}


console.log(scrollingText("robot"))



