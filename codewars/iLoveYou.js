function howMuchILoveYou(nbPetals) {
    let answers = ["I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"]

    let index = (nbPetals - 1) % 6;

    console.log(index)

    return answers[index];

}

console.log(howMuchILoveYou(7))

