// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

// Solution 1

const createInstructor = (firstName, lastName) => ({firstName, lastName});

let newInstructor = createInstructor("John", "Smith");
console.log(newInstructor);


// Solution 2
const favoriteNumber = 42;

const instructor1 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

console.log(instructor1);

// var instructor2 = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }


// Solution 3
  const instructor2 = {
      firstName: "Colt",
      sayHi() {
          return "Hi!"
      },
      sayBye() {
          return `${this.firstName} says bye!`
      }
  }

  console.log(instructor2.sayHi());
  console.log(instructor2.sayBye());

  const createAnimal = (species, verb, noise) => ({
      species,
      verb,
      noise,
      [verb]() {
          return console.log(this.noise);
      }
  })

  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
console.log(d);
d.bark()  //"Woooof!"
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
console.log(s);

s.bleet() //"BAAAAaaaa"




