// Activity 5 from if/else

num = "12";

if(num % 3 == 0 && num % 5 == 0) {
    //if the number is divisible by both 3 and 5, log fizz buzz
    console.log("fizz buzz");
} else if (num % 3 == 0) {
    //if the number is divisible by only 3, log fizz
    console.log("fizz");
} else if (num % 5 == 0) {
    //if the number is divisible by only 5, log buzz
    console.log("buzz");
} else {
    //if none of the conditions are met, log the original number
    console.log(num);
}


// Activity 5 from loops

for  (let i=0; i<6; i++) { 
    // For math.random, * 30 sets the upper range at 30. +1 sets the lower range at 1. 
    let randomNum = Math.round((Math.random() * 30)+1);
    // checking if the random number is divisible by 7 or not and logging a response
    if (randomNum % 7 == 0) {
        console.log(`${randomNum} is divisible by 7`);
    } else {
        console.log(`${randomNum} is not divisible by 7`);
    }
}


// Activity 2 from loops

//The for loop will run 6 times.
for  (let i=0; i<6; i++) {
    // For math.random, * 50 sets the upper range at 50. +1 sets the lower range at 1. 
    console.log(Math.round((Math.random() * 50)+1));
}


// Activity 3 from loops
// i starts at 9
//The loop stops when i is less than 0 
//i-- takes 1 away from i each cycle

for (let i=9; i>=0; i--) {
    console.log(i);
}


// Activity 2 from objects

let pet = {
    name: "Ted",
    typeOfPet: "Dog",
    age: 1,
    colour: "brown",
    eat() {
        //the "this" keyword 
        return `${this.name} is eating!`
    },
    drink() {
        return `${this.name} is drinking!`
    },
};

console.log(pet.eat());
console.log(pet.drink());


// Activity 3 from if/else

const password = "code nation"

if(password.length < 8) {
    //if password has less than 8 characters, then the console.log below will print
    console.log("Your password is too short");
} else {
    console.log(password);
}


//Activity 4 from if/else

const num2 = "9";

if(num2 % 3 == 0 || num2 % 5 == 0) {
    //if the number is divisible by 3 OR 5, then the console.log below will print
    console.log("This number is divisible by 3 or 5.");
} else {
    console.log("This number is NOT divisible by 3 or 5.");
}