function areYouPlayingBanjo(name) {
    if (name[0] === 'r' || name[0]=== 'R'){
        return `${name} plays banjo`
    } else {
        return `${name} does not plays banjo`
    }
  }

console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Ringo'))
console.log(areYouPlayingBanjo('rolf'))
