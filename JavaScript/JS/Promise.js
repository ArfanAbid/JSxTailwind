// Through Promise we can obtain Asynchronous in JS

// new Promise(function (resolve, reject) =>{});
const a= new Promise((resolve,reject)=>{ // callbacks function
    let success=false;
    if(success) resolve("Promise resolved successfully"); // call a.then function
    else reject("Promise rejected"); // call a.catch function
});

// a.then().catch().finally();
a.then((parameter)=>{
    console.log(parameter);
}).catch((error)=>{
    console.log(error);
});

//Another Example related to fetch data 

const arr = [];

const fetchData=() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push({name:"Arfan"});
            let success=true;
            if (success) resolve ("Promise resolved successfully");
            else reject("Promise rejected");
        },2000);
    });
};

// fetchData(arr).then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Either Executes");
// });

fetchData(arr).then((message)=> console.log(message))
.then(() => console.log("Can also make chain"))
.catch((error)=>console.log(error))
.finally(()=>console.log("Either Executes"));