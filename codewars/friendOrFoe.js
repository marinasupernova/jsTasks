function friend(friends){
    let oneFriend = '';
    let realFriends = [];

    for (let i = 0; i < friends.length; i++){
        oneFriend = friends[i];
        if (oneFriend.length === 4){
            realFriends.push(oneFriend)
        }
    }

    return realFriends;
  }

function friend(friends){
    return friends.filter(friend => friend.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]))