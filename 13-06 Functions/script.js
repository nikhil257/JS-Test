// FUNCTIONS - Function Programming Paradigm

// function declaration and intialisation
// function funcname(){
// console.log("")
// }

// function calling
// funcname();
// funcname();

// We only have to write function only one time and whenever needed we just have to call it.

// // Non- Parameterized function  --- > in which parameters are not given
// function greet(){
//     console.log("Hello everyonw...");
// }


// Parameterized Function
// parameter (initialization or declaration) = variable of function  == written inside greet bracket
// arguments(call) = value of function variable == written inside function calling bracket

// function greet(message, name){
//     console.log(`Good ${message} ${name}`);
// }
// function calling
// greet(Morning, John);
// greet(Evening, smith);



// -------------------------------------------------------------------------


// Functions must not use anything outside it's scope it leads to IMPURE function which are not efficient and not a good programmer practice

// IMPURE FUNCTION

// const message = prompt("ENter message");
// function greet(){
//     console.log(`Good ${message}`);
// }
// greet();


// PURE FUNCTION    --- as everything is written inside it's scope "{}"

// function greet(){
//     const message = prompt("Enter Message");
//     console.log(`Good ${message}`);
// }
// greet();
// greet();


// -------------------------------------------------------------------------

// RETURN

// retun is used to send the result outside the function.

// function sum(a, b){
//     let s = a + b;
//     return s;
    // return must be the last statement of the function
    // retunr always takes the single value
// }
// the function call is replaced by return value
// let result = sum(12, 18);
// let x = 5;
// console.log(result);
// console.log(result * x);


// -------------------------------------------------------------------------

// Variable Length parameters / arguments
// ... rest operator --> stores the value in the form of array
// rest operator should be the last operator in the function
// there must not be more than one rest operator in the function

// function hobbies(name, age, ...h){
//     console.log(name, age);
//     return h;
// }
// let result = hobbies("John", 13 ,"bpl" , 77, 100, 22);
// console.log(result);

// -------------------------------------------------------------------------

// Default Prameters


// 1 Default Prameters should be at the end of the parameter list
// function dets(name, age, batchcode = "MERN11"){
//     console.log(name, age, batchcode);
// }
// dets("John", 22);

// 2 There must be single parameter in a function
// function dets(name, age, batchcode= "MERN11" , city){
//     console.log(name, age = "22", batchcode, city);
// }
// dets("John", 22, "Bhopal") //The problem in this is that you have to give value to default parameter again and again so that you can put value in the "CITY"


// -------------------------------------------------------------------------


// Keyword Function Arguments


// function dets({username, age, city}){
//     console.log(username, age ,city);
// }

// dets({city : "NY", username : "John", age : 20});


// -------------------------------------------------------------------------

// statement is something which combines more than one line to give output
// Single line which is not dependend on any other thing thn it is called Expression

// -------------------------------------------------------------------------

// Arrow Function 

// it converts multiple line of function into a short function.
// let variable = (-, -, -) => {
    // a + b + c;
// }


// or


// let variable = (-, -, -) => a + b + c;   >>>> do not use paranthesis if the code is of single line

// let s = variable(1,2,3);
// console.log(s);


// -------------------------------------------------------------------------


