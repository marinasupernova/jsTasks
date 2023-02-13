const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

function restoreNames(users) {

  for (person of users) {

    if (person.firstName === undefined) {
      person.firstName = person.fullName.split(' ')[0]

    }
  }
}
restoreNames(users)
console.log(users)