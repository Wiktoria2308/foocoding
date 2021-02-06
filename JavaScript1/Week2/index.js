console.log("Hello, World!");
console.log("Witaj, świecie!");
console.log("Hej, världen!");

console.log("I'm awesome");

// let food = ["pizza", "hamburger", "pommes"];
// for (let i = food.length -1; i >=0; i--) {
//     console.log("food-item:", food[i]);
    
// }


//task 3

let x;
console.log("x will be undefined");
console.log("x is: " + x);
x = 10;
console.log("x will be 10");
console.log("x is: " + x);

//task 4

let y = "Wiki";
console.log("'y' will be Wiki");
console.log("'y' is: " + y);
y = "Niki";
console.log("'y' will be Niki");
console.log("'y' is: " + y);

//task 5

let z = 7.25;
console.log("z is: " + z);
let a = Math.round(z);
console.log("a is: " + a);
let highest;
if(a > z) {
    highest = a;
}
else {
    highest = z;
}
console.log("The highest number is: " + highest);

//task 6

let fruits = [];
console.log("the value of an array 'fruits' is empty []");
console.log(fruits);
let favouriteAnimals = ["dog", "cat", "hamster"];
console.log("My favourite animals: ", favouriteAnimals);
let DaansFavouriteAnimal = "baby pig";
favouriteAnimals.push(DaansFavouriteAnimal);
console.log("My favourite animals plus Daan's favourite animal: ", favouriteAnimals);

//task 7

let myString = "this is a test";
console.log("myString is: " + myString);
let myStringLength = myString.length;
console.log("The length of myString is: " + myStringLength);

//task 8

let age = 31;
let firstName = "Wiktoria";
let hasJob = false;
let whenGetJob = undefined;
let address = "Malmo";

console.log("The value of variable age is: " + age);
console.log("The value of variable firstName is: " + firstName);
console.log("The value of variable hasJob is: " + hasJob);
console.log("The value of variable whenGetJob is: " + whenGetJob);
console.log("The value of variable address is: ", address);

console.log("The type of age is number.");
console.log("The type of firstName is string");
console.log("The type of hasJob is boolean.");
console.log("The type of whenGetJob is undefined.");
console.log("The type of address is string");

console.log("age type is: ", typeof(age));
console.log("firstName type is: ", typeof(firstName));
console.log("hasJob type is: ", typeof(hasJob));
console.log("whenGetJob type is: ", typeof(whenGetJob));
console.log("address type is: ", typeof(address));

if(typeof(age) == typeof(address)) {
    console.log(age, address, "SAME TYPE")
}
else {
    console.log(age, address, "NOT SAME TYPE");
}

if(hasJob == whenGetJob) {
    console.log(hasJob, whenGetJob, "SAME TYPE");
}
else {
    console.log(hasJob, whenGetJob, "NOT SAME TYPE");
}
if(typeof(firstName) == typeof(address)) {
    console.log(firstName, address, "SAME TYPE");
}
else {
    console.log(firstName, address, "NOT SAME TYPE");
}

//task 9

x = 7;
x = x  % 3;
console.log("The new value of x will be 1");
console.log("x is: ", x);
console.log("The '%' is a modulus, it returns the division remainder.");
console.log("The modulus of 10 / 3  is 1: ", 10 % 3);
console.log("The modulus of 15 / 5 is 0:  ", 15 % 5);
console.log("The modulus of 11 / 3 is 2: ", 11 % 3);

//task 10

console.log("We can store multiple types in an array");
let names = ["Wiktoria", 31, true];
console.log("Array with multiple types: ", names);

if(6/0 === 10/0) {
    
    console.log("We can compare infinities. Because 6/0 === 10/0 is: ", 6/0 === 10/0);
}
else {
    console.log("We can't compare infinities.");
}
