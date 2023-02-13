const people = [
  { name: 'Emma', gender: 'female', age: 19 },
  { name: 'Avram', gender: 'male', age: 41 },
  3,
  'dfasfsadf',
  [1, 2, 3, 4]
];


function removeFemaleAges(people) {

  let newPeople = [];
  for (let person of people) {
    if (person.gender === 'female') {
      delete person.age;
    }
    newPeople.push(person);
  }
  return newPeople;
}

console.log(removeFemaleAges(people))