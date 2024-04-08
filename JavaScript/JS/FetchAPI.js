

const url="https://catfact.ninja/fact";
const h= document.querySelector("h1");
const fetchdata=() =>{
    fetch(url,{
        method: "GET",headers: {'Content-Type': 'application/json'}})
        .then((response)=>{  // fetch is actually a promise so ut return a promise
        console.log(response);
        return response.json();
    }).then((data)=>{
        h.innerText=data.fact;
        // console.log(data);
    });
};

/*
const fetchdata=() =>{
    fetch(url).
    then((response)=>  response.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error));
};

*/


fetchdata();