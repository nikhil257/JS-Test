// ARRAY

// array is a collection of different data-types
// array is collection of heterogeneous data types in square brackets seperated by commas,.  with continuous memory location
// arr = [] 
// arr = [1,5,g,true,(), {}];
// indexing starts from 0...
// CRUD


// let arr = ["a", "b" , 4, 6, "hello", [2,5,7], () => {}];
// console.log(arr);
// console.log(Array.isArray(arr));  //---- to check the typeof array
// console.log(arr.length);  //---- to check the length of an array



// let arr = [12,13,16,77,54, 89,10];
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);  //--- to check the length the array from back or end 
// console.log(arr.flat(-1));  //--- to check the length the array from back or end



// -------------------------------------------------------------------------------------
// CREATE
// let arr = [12,13,16,77,54, 89,10];

// READ
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);  //--- to check the length the array from back or end 
// console.log(arr.flat(-1));  //--- to check the length the array from back or end

// UPDATE
// arr.[2] = 3453;
// console.log(arr);

// or

// PUSH -=> to update the element at the end of a array
// let x = arr.push(42,464,87,35);
// console.log(x);

// UNSHIFT
// let x = arr.unshift(42,464,87,35);
// console.log(x);

// DELETE
// delete arr[2];
// console.log(arr);

// or 

// SHIFT => deletes the element from the starting of an array and return or print it
// let x = arr.shift();
// console.log(x);


// POP => deletes the element from the end of an array and returns or print it
// let x = arr.pop();
// console.log(x);


// SPLICE => deletes the element from the middle
// let x = arr.splice(3,4); //delete the element at index
// console.log(x); // returns the removed element from an array --- It is mutable

// -------------------------------------------------------------------------------------

// Traverse
// let arr = [12,13,16,77,54, 89,10];
// for (i = 0; i < arr.length; i++){
//     console.log(i, arr[i]);
// }

// -------------------------------------------------------------------------------------

// Slice
let arr = [12,15,14,13,17,27,48,95];
// // array.slice(startingIndex, endingIndex +1);
// let x = arr.slice(2, -2);
// console.log(x);  // It returns the new string -- It is immutable


// -------------------------------------------------------------------------------------
// DIFFERENT TRAVERSING METHOD


// the function which runs because of another function is known as CALLBACK FUNCTION

// arr.forEach((element, index)=>{
//     console.log(index, element);
// });


// -------------------------------------------------------------------------------------

// Map

// let x = arr.map((element, index)=>{
//     return element * 2;
// })
// console.log(arr);
// console.log(x);

// note: mapping always return the value
// -------------------------------------------------------------------------------------

// Filter

// let x = arr.filter((element, index)=>{
//     return element % 2 == 0; // put the condition here 
// })
// console.log(arr);
// console.log(x);

// -------------------------------------------------------------------------------------

