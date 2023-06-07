//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;

if(q1test%3 == 0){      
  console.log('even');  
}

else{
  console.log('not divisible');
}

if (q1test%5 == 0){
    console.log('another even!')
}

else {
    console.log('not divisible')
}


//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

let year = 1999;
let yearA = 2000;
let yearB = 1900;
let yearC = 2024;

if (year %4 == 0){
    console.log('leap year!');
}
else{
    console.log('not a leap year');
}

if (yearA %4 ==  0){
    console.log('leap year!');
}
else{
    console.log('not a leap year');
}

if (yearB %4 == 0){
    console.log('leap year!');
}
else{
    console.log('not a leap year');
}

if (yearC %4 == 0) {
    console.log('leap year!')
}
else{
    console.log('not a leap year')
}



//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.
let q3;

for(q3=1;q3<=100;q3=q3+1){
    console.log(q3);
}




/***************************************************************************************
*    Title: <stackoverflow> for 2.2 JS questions 1 & 2
*    Author: <https://stackoverflow.com/users/6561907/edgar256>
*    Date: <4-24-2019>
*    Availability: <https://stackoverflow.com/questions/2821006/find-if-variable-is-divisible-by-2>
*
***************************************************************************************/
