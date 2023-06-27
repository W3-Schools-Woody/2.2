//Write JS code that solves the following problems

//======================-=-==-=-=-=-=-=-=-=-=-=-=-=--

//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5 or both.

let q1test = 15;

if (q1 test % 3 === 0 && % 5 ===0) {
    console.log("divisible by both!");
} else if (q1test % 5 === 0) {
    console.log("divisible by 5");
} else if {q1 test % 3 === 0) {
    console.log(divisible by 3");
} else {
  console.log("not divisible by 3, 5 or both");


//Q2. Using an if else statement, determine if a year is a leap year or not.
//Research what is considered a leap year.

// let year = 1999;
 let year = 2000;
// let year = 1900;
// let year = 2024;

/* A leap year is a 
    * year that can divided by 4 evenly.
    * except if it is divisible by 100.
    * except if it is divisible by 400.

    If is divisible by 4 then we must make check if it is divisible by 100. 
    If it is then we must check if it is divisible by 400. 
    If so then it is a leap year!

*/


if (year % 4 === 0) { 
  if (year % 100 == 0) {
    if (year % 400 === 0 {
        console.log(`$(year) is NOT a leap year`);
    } else { 
        console.log(`$(year) is NOT a leap year`);
    }
  } else { 
      console.log(`$(year) is a leap year!`);
  }
} else { 
  console.log(`$(year) is NOT a leap year`);
}




//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

//for loop
for (let i = 0; i <= 100; i++) {
    if (i % 4 === 0 || i % 3 === 0) {
      console.log(i);
    }
}

//while loop
let i = 0
while (i <= 0) {
  if (i % 4 === 0 || i % 3 === 0) {
    console.log(i);
  }
  i++;
}
