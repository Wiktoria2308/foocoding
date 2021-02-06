//task 1

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log("Length of the above string is: ", myString.length);
let result = myString.replace(/,/g, " ");
console.log(result);

//task 2

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
let MaurosFavouriteAnimal = "turtle";
favoriteAnimals.push(MaurosFavouriteAnimal);
console.log(favoriteAnimals);
let JimFavoriteAnimal = "meerkat";
favoriteAnimals.splice(1, 0, JimFavoriteAnimal);
console.log(favoriteAnimals);
console.log("The array has a length of: ", favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let index = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: 'meerkat' - ", index);

//MORE JAVASCRIPT 

//task 1 

function sum(par1 , par2, par3) {
    return par1 + par2 + par3; 
}
let sumTest = sum(1, 2 , 3);
console.log(sumTest);

//task 2

function colorCar(color) {
    console.log("A " + color + " car.");
}
colorCar("blue");

//task 3 
let Nikola = {
    age: 10,
    firstName: "Nikola",
    pet: "hamster",
    likeReading: true,
};

function printAll(object){
    console.log(object);
}
printAll(Nikola);

//task 4 
function vehicleType(color, code) {
    if (code === 1) {
        console.log("a " + color + " car")
    }
    else if(code === 2) {
        console.log("a " + color + " motorbike");
    }
    else {
        console.log("Not such code.");
    }
}
vehicleType("blue", 2);

//task 5

console.log(3 === 3 ? "yes" : "no");

//task 6

function vehicle(color, code, age) {
    if (code === 1 && age <= 1) {
        console.log("a " + color + " new car")
    }
    else if(code === 1 && age >= 2) {
        console.log("a " + color + " used car");
    }
    else if(code === 2 && age <=1){
        console.log("a " + color + " new motorbike");
    }
    else if(code === 2 && age >= 2) {
        console.log("a " + color + " used motorbike");
    }
    else {
        console.log("Not such code.");
    }  
}
vehicle("red", 1, 1);

//task 7 

let vehicles = ['motorbike', 'caravan', 'bike', 'car', 'truck', 'lorry']; //added lorry as a answer to task 11

//task 8 
console.log(vehicles[2]);

//task 9

function vehicle2(color, index, age) {
    if (age <= 1) {
        console.log("a " + color + " new " + vehicles[index])
    }
    else if(age >= 2) {
        console.log("a " + color + " used " + vehicles[index]);
    }
    else {
        console.log("Not such code.");
    }   
}
vehicle2("green", 2, 1);

//task 10 
let text = "";
for (let i = 0; i < vehicles.length -2; i++) {
    text += vehicles[i] + "s, ";
    
  }

let advert = "Amazing Wiktoria's garage, we service "+ text + vehicles[vehicles.length -2] + "s and " + vehicles[vehicles.length -1] + "s.";
console.log(advert);

//task 11

console.log("yes"); //see task 7

//task 12

let obj = {};

//task 13

let teachers = {
    teacher1: "Josef",
    teacher2: "Seif",
};

//task 14
teachers.languages = ['HTML', 'CSS', 'JavaScript'];
console.log(teachers);

//task 15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(z);
console.log(x == y); //false
console.log(x === y); // false
console.log(z == y); //true
console.log(z == x); // false

//task 16

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o1.foo = "bar1";
o2.foo = "bar2";
console.log(o1);
console.log(o2);
console.log(o3); // changing o2 changes o3

//task 17 
let bar = 42;
console.log(typeof typeof bar); // the name of the variable is a string, that is why this code returns string

