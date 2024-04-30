let firstName = "Kimberly";
let middleName = "Nicole";
let lastName = "Maddox";

// concatenation is the process of joining strings together
let fullName = firstName + " " + middleName + " " + lastName;
console.log("Hello " + fullName + "!");

// interpolation is the same as concatenation but with backticks
console.log(`Hello ${fullName}!`);

// length is a property that returns the number of characters in a string
console.log(fullName.length);
console.log(`Your full name is ${fullName.length} characters long.`);             // longer version 

// index is a property that returns the character at a specified index
let initials = firstName[0] + middleName[0] + lastName[0];
console.log(`Your initials are ${initials}.`);

// slice is a method that returns the characters in a string between the start and end index
console.log("Sup " + firstName.slice(0, 3) + "!");

// reverse is a method that reverses the order of the characters in a string
console.log(firstName[7].toUpperCase() + firstName[6] + firstName[5] + firstName[4] + firstName[3] + firstName[2] + firstName[1] + firstName[0].toLowerCase() );