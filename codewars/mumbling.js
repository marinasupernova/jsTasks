function accum(s) {
	let result = '';

    let repetitionNum = '';
    for (let i = 0; i < s.length; i++ ) {
        if (s[i] === s[i].toUpperCase()){
            repetitionNum = s[i].repeat(s.indexOf(s[i])).toLowerCase();
            console.log(repetitionNum)

        }
        if (s[i] === s[i].toLowerCase()) {
            repetitionNum = s[i].repeat(s.indexOf(s[i])).toUpperCase();
            //console.log(repetitionNum)
        }
        
        
    }
}


console.log(accum('ZpglnRxqenU'))