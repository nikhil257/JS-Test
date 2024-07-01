// Comparison Operators   returns Boolean value
//  > >= < <= == !=     === !==

// in string comparison, Javascript always compares the first not equal character only
// console.log(12==="12");
// console.log("john" > "doe");    because of ascii value


// Logical Operators
// output depends on the data is being compared logically
//  && || !

// a = 12;
// x = a > 10;
// y = a % 3;
// console.log(x || y);
//  console.log(x && y);



// Truth Table
//                 &&      ||
// false false    False   False
// true  false    False   True
// false true     False   True
// true  true     True    True


// Falsy Value (not defined or false in JS)
// null 0 undefined false ""

// console.log("hello" && null && "hi");
// console.log("hello" || null || "hi");