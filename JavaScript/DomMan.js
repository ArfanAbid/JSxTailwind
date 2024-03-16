// console.log(document.body)
// console.log(document.body.children)

console.log(document.documentElement)
console.log(L1)

const a=document.getElementById("L1"); // by class

const b =document.getElementsByClassName("C1");
// const b =document.getElementsByClassName("C1[2]");
console.log(b)
b[0].textContent = "Dome manupulation changes in JS";


const c=document.getElementsByTagName("span");

// all styling can also be done in thid JS

const  d=document.getElementById("ok");
d.setAttribute("class","newClass"); // added class in this 

//creating tags used when it is called or when page relodes
function bringHeading(){
    const h2=document.createElement("h2");
    h2.innerText="Hello world";
    document.body.prepend(h2); // or can be deleted by .remove()
}
