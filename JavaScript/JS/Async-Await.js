const url="https://catfact.ninja/fact";
const h= document.querySelector("h1");
// const fetchdata=() =>{
//     fetch(url,{
//         method: "GET",headers: {'Content-Type': 'application/json'}})
//         .then((response)=>{  // fetch is actually a promise so ut return a promise
//         console.log(response);
//         return response.json();
//     }).then((data)=>{
//         h.innerText=data.fact;
//         // console.log(data);
//     });
// };
// fetchdata(); 
                                // same code as previous for fetch thill now 



// Async Await -> whereever it return promise then use await there 

// const fetchdata=async () => {
//     const response=await fetch(url);
//     const data= await response.json();
//     h.innerText=data.fact;
// }

// fetchdata().catch((error)=>{ console.log(error)}); 

// OR with exception handling


// const fetchdata=async () => {
//     try {
//         const response=await fetch(url);
//         const data= await response.json();
//         h.innerText=data.fact;
//     } catch (error) {
//         console.log(error);
//     }
//     finally{
//         console.log("run with either");
//     }

// };

// fetchdata();

// custom Errors 

const e=new Error("Custom Error");
e.name="Iffi_Error";
console.log(e);



                                    // Take another example and see order in which it print

// console.log("a");

// setTimeout(() =>{
//     console.log("timeout");
// },0);

// Promise.resolve().then(() => console.log("Promise"));

// console .log("z");

                                    //Best Example to understanding the concept of asynchronous in JS

console.log("a");
const fetchdata=async () => {
    console.log("f1")
    const response=await fetch(url);
    console.log("f2")
    const data= await response.json();
    console.log("f3")
    h.innerText=data.fact;
    console.log("f4")

}

fetchdata(); 
console.log("z1")
console.log("z2")
console.log("z3")
