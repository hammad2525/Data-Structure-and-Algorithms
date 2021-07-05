// Traverse your name and print its length, indices, and each character.
let myName = "hammad";

console.log(myName.length);

for (let index = 0; index < myName.length; index++) {

    console.log(myName[index]);

}

// Take any two random strings and concatenate them to each other

let myName1 = "hammad";
let myName2 = "khan";
let myName3 = myName1 + " " + myName2;
console.log(myName3);

//  Suppose you are given a string: ‘Karachi’. Convert it to ‘Kolachi’ 
//  (Hint: Need to look at appropriate indices and replace them)

let city = "karachi";

console.log(city.replace('a', 'o').replace('r', 'l'));


// Consider a string ‘Node.js’given to you.
//  I want the last three characters removed. How’d you do that?

let value = "Node.js";

let newv = value.substring(0, 4);
console.log(newv);

// There’s a string that’s given to you: ‘Reactj’.
//  You need to add s to its last index to make it a complete name i.e. ‘Reactjs’

let initialValue = "Reactj";
let v = 's';
let n = initialValue + v;
console.log(n);