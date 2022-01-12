function isJumping(number) {
    if (number<=9){
      return 'JUMPING'
    }
  
    let nums = String(number).split('')
    
    for(let i = 0; i < nums.length; i++){
        nums[i] = Number(nums[i])
    }

    let result = 'JUMPING'
  
    for (let i =0; i < nums.length - 1; i +=1){
  
      if (nums[i] + 1 !== nums[i+1] &&
          nums[i] - 1 !== nums[i+1]
          ) {
        return 'NOT JUMPING'
      }  
    }
  
    return result
    
  }

  console.log(isJumping(123676))