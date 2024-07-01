// Primitive / Non-Reference / Immutable
// Number, Strings, Boolean, null, Undefined
// Original remains the same and it makes a copy of original to change the data 
// diagram
// x=5;
// y=x;
// X ----- 5
//   \copy
// y ----- 5

// Reference / Non-Primitive / Mutable
// data types - [] , {}
// Original data is not safe -- it changes the data of main variable

// a --- 5;
    // 
//b   

// Ex - 
// let a = [1];
// let b = a;
// a[0] = 123;
// console.log(a,b);