// NOTE
//1 Try Catch is used to handle SYNC errors
//2 Promises are used to handle ASYNC errors


// CREATING PROMISE
// function mypromise(data){
//     return newpromise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if (data > 100){
//                 resolve("data is grater than 100");
//             }else(data < 100){
//                 reject("data is less than 100");
//             }
//         },1000);
//     });
// }


// ---------------------------------------------------------------------------------------------


// // USING PROMISE
// mypromise(2)
//     .then((result)=> {
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


// ---------------------------------------------------------------------------------------------


// Example of Fetch API (Predefined Promise in JS to call data from API (AJAX))
// let userapi =`https://jsonplaceholder.typicode.com/users`;
// fetch(userapi)
//     .then((response)=> {
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// ---------------------------------------------------------------------------------------------


// async and await -> use to convert async code to sync data

// async function getusers(){
//     try{
//         let userapi = `https://jsonplaceholder.typicode.com/users`;
//         const response = await fetch(userapi);
//         const data = await response.json();
//         console.log(data);
//     }catch (error){
//         console.log(error);
//     }
// }
// getusers();


// ---------------------------------------------------------------------------------------------
