// Sync and Async

//1. SetTimeout

// setTimeout(()=>{
//     console.log("Hello");
// },1000);
// console.log("World");

// -------------------------------------------------

//2. setInterval

// setInterval(()=>{
// console.log(a);
// a++;
// }, 1000);

// setInterval(()=>{
//     if(a===5){                     
//         clearInterval(x);           // --> It is used to stop the setInterval
//     }
//     console.log(a);
//     a++;
// }, 1000);

// -------------------------------------------------
// AJAX - Asyncronus JavaScript xml

//FETCH API

//API is given by backend and to implement api in frontend we use the concept of AJAX which is theoritical concept and to implement it we use "fetch api"/ "axios" in frontend
// let userapi =`https://jsonplaceholder.typicode.com/users`;
// fetch(userapi)
//     .then((response)=> response.json())  //--> converts the data string to .json
//     .then((response)=> console.log(response))
//     .catch((err)=> console.log(err));

// -------------------------------------------------
