
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

// Solution 4
const createAnimal = (species, verb, noise) => ({
    species,
    verb,
    noise,
    [verb]() {
        return console.log(this.noise);
    }
})

const d = createAnimal("dog", "bark", "Woooof!")
console.log(d);
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
console.log(s);
s.bleet() //"BAAAAaaaa"




