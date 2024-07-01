// Question1
// let num = Number(prompt("Enter Number"));
// console.log("Number is", num);
// console.log(typeof num);

// ------------------------------------------------------------------

// Question2
// WAP to accept name of the user and print "Given name is John"

// let username = prompt("Enter Your Name");
// console.log("Given name is"+ username); or
// console.log(`Given name is ${username}`);

// ---------------------------------------------------------------------

// Question3
// WAP to accept two integers and print their sum "the sum of 2 and 4 is 6"

// let num1 = +prompt("Enter Number One");
// let num2 = +prompt("Enter Number Two");
// let sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// -------------------------------------------------------------------------

// Question4
// WAP to accept name and 3 different subject marks from the user to calculate the total and percentage of it 
// output  - Hello, John your total score is 345 with 67.89% in the Exam.

// let username = prompt("Enter Your Name");
// let sub1 = +prompt("Enter Subject 1");
// let sub2 = +prompt("Enter Subject 2");
// let sub3 = +prompt("Enter Subject 3");
// let total = sub1 + sub2 + sub3;
// let percent = (total/300)*100;
// console.log(`Hello ${username} your total score is ${total} with ${percent.toFixed(2)}% in the Exam`);

// ----------------------------------------------------------------------------

// Question5
// WAP to temperature in F and convert it in to C
// output - The temperature is 34 in C

// let f = +prompt("Enter the temperature");
// let c = (f-32)*5/9;

// console.log(`The temperature is ${c.toFixed(2)} in C`);

// --------------------------------------------------------------------------------

// Question 6
// WAP to accept required input to calsulate SI
// output - The Simple Interest of 234 in 4 years with the rate of 2 is 743

// let p = +prompt("Enter the Actual or Principal amount");
// let r = +prompt("Enter the rate of interest");
// let t = +prompt("Enter the time period in years");
// let SI = (p*r*t)/100;
// console.log(`The Simple Interest of ${p} in ${t} years with the rate of ${r} is ${SI}`); 

// ------------------------------------------------------------------------------------
// Question7
// WAP to accept Name, Gender and Age of the person and check whether he/she is able to vote
// success output - Congratulations Mr. ABC you can vote
// faliure output - oh sorry Ms. ABC cannot vote for 4 more years.

// let username = prompt("Enter Your Name");
// let gender = prompt("Enter Your Gender");
// let age = +prompt("Enter Your Age");
// let n = 18 - age;

// if(age >= 18 && gender == "Male" || "male"){
//     console.log(`Congratualtions Mr. ${username} you can vote `);
// }else if(age >= 18 && gender == "Female" || "female"){
//     console.log(`Congratualtions Ms. ${username} you can vote`);
// }else if( age <= 17 && gender == "Male" || "male"){
//     console.log(`oh sorry Mr. ${username} you cannot vote for ${n} more year`);
// }else if( age <= 17 && gender == "Female" || "female"){
//     console.log(`oh sorry Ms. ${username} you cannot vote for ${n} more year`);
// }


// Ternery if-else : conditon ? true-statement : else-statement
// example : ${gender === "Male" || "male" ? "Mr." : "Ms."} ${username}you can vote;

// ---------------------------------------------------------------------------------------------
// 11-06-2024

// prepinsa

// Question8
// WAP to accept 3 integers and check among them whether
// i. all three are equal
// ii. any two are equal
// iii. all are different 
// and print suitable message according to it.

// let num1 = +prompt("enter first number");
// let num2 = +prompt("enter second number");
// let num3 = +prompt("enter third number");

// if (num1 === num2 && num2 === num3){
//     console.log("All are Equal");
// }
// else if( num1 === num2 || num2 === num3 || num1 === num3){
//     console.log("Two are Equal");
// }
// else if( num1 != num2 != num3){
//     console.log("all are different");
// }

// ----------------------------------------------------------------------------------------------------



// Question9
// WAP to accept an integer and check whether it is even or odd

// let num = +prompt("Enter a Number");
// if(num % 2 == 0){
//     console.log("Entered integer is Even");
// }else{
//     console.log("Entered integer is odd");
// }



// --------------------------------------------------------------------------------------------------

// Question 10
// WAP to print table of the given number.

// ---------------------------------------------------------------------------------------------------

// Question 11
// WAP to find fractional of the given number

// let n =3;
// let f =1;
// for (let i = n; i >= 1; i--){
//     f *= i;
// }
// console.log(f);


// ----------------------------------------------------------------------------------------------------
// Question 12
// WAP to find all the factors of the given integer

// let num = 12;
// for(let i = 2; i < num; i++){
//     if (num % i ==0){
//         console.log(i);
//     }
// }

// ----------------------------------------------------------------------------------------------------
// Question 13
// WAP to find whether the given number is prime or not prime

// let flag = "Prime";
// let n = 99;

// for(i =2; i <= (n/2); i++){
//     if(n % i == 0){
//         flag= "Not Prime";
//         break;
//     }
// }
// console.log(flag);



// ----------------------------------------------------------------------------------------------------
// Question 14
// WAP to print the fabonacci series to the given length

// let n = Number(prompt("Enter a Number"));
// let a = 0;
// let b = 1;
// console.log(a,b);

// for(i = 0; i < n; i++){
//     sum = a + b;
//     a = b;
//     b = sum;
//     console.log(sum);
// }

// or

// let f = 0;
// let s = 1;
// i = 1;
// n = 10;
// let output = f + "" + s;
// while(i <= n-2){
//     next = f + s;
//     f = s;
//     s = next;
//     output += " " + next;
//     i++;
// }
// console.log(output);



// ----------------------------------------------------------------------------------------------------


// Question 15

// Create a setTimeout that logs “Hello, World!” to the console after 3 seconds.

// setTimeout(()=>{
//     console.log("Hello World");
// }, 3000);

// ----------------------------------------------------------------------------------------------------

// Question 16
// Create an async function that waits for 1 second and then returns the number 100.

// async function num(){
//     try{
//         let num = 100;
//         setTimeout(()=>{
//             for(let i = 0; i <= num; i++){
//                 console.log(i);
//             }
//         }, 1000);
//     }catch(error){
//         console.log("Data not found");
//     }
// }
// num();

// ----------------------------------------------------------------------------------------------------

// Question 17
//Create an async function that waits for 3 seconds and then returns an object { success: true }.

// async function obj(){
//     try{
//         let obj= {
//             name : "John",
//             age : 24,
//             gender : "male",
//             profile : "Software developer",
//         };
//         setTimeout(()=>{
//             console.log(obj);
//         }, 3000);
//     }catch(error){
//         console.log("Data not Found");
//     }
//     }
// obj();

// ----------------------------------------------------------------------------------------------------

// Question 18
// Create an async function that waits for 1.5 seconds and then returns an array [1, 2, 3].

// async function arr(){
//     try{
//         let arr = [1,2,3,4,5];
//         setTimeout(()=>{
//             console.log(arr);
//         }, 1500);
//     }catch(error){
//         console.log("Data not Found");
//     }
// }
// arr();

// ----------------------------------------------------------------------------------------------------

// Question 19
// Create an async function that waits for 3.5 seconds and then returns a randomly generated number between 1 and 10.

// async function num(){
//     try{
//         let arr = [1,2,3,4,5,6,7,8,9,10];
//         setTimeout(()=>{
//             console.log(arr, arr.length);
//         }, 3500);
//     }catch(error){
//         console.log("data not found");
//     }
// }
// num();

// ----------------------------------------------------------------------------------------------------

// Question 
// calculate thte average height of students in a class stored in an array using loop.

// let students = [106, 137, 187, 198, 157];
// let height = 0;

// for(let items of students){
//     height += items; 
// }
// let avght = height / students.length;
// console.log(height);
// console.log("average height of students is",avght)


// ----------------------------------------------------------------------------------------------------

