// HOISTING


// Varibale are partially Hoisted. (let, const, var)
// Functions are fully hoisted


// 1. let/ const / var are all partially Hoisted
// 2. let and const give "Cannot access variable" while on other hand var gives "undefined error" if printed before initializing.
// 3. Functions will be hoisted also with all the code because the whole function code is both declared + initialized


// TDZ = Temporal Dead Zone (let and const goes to this as they cannot access the variable if printed before declaration)

// Every code has Global Execution Context where the code is been made of generated by the system
// It has 3 phase ==> Declaration = var a;
                 //   Initializing = a = 5;
                 //   print = console.log();

// EX- 1 
// console.log(a);
// var a = 5;


// EX - 2
// console.log(b);
// let a=5;

// EX - 3
// sum(1,2);
// function sum(a, b){
//  console.log(a + b);
// }

// EX-4

// ------- This will print as "undefined" or "cannot access x" because all the values are stored in a variable and not as function ---------

// sonsole.log(x);

//var x = function sum(a, b){
//      console.log(a + b);
//}