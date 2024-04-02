// alert("Hello Arfan !!");

// Creating Variable (3 Methods:)

let x= 10;  // Its value can be changed in the program, mostly this is used
const y= 20;   // This cannit be changed throughout the program to
var z=30; // almost same as let

// true = 1
// false = 0  

let i=true; 
console.log(x+17+i); 
let j="Arfan";
console.log(17+j);

console.log(`Hey my name is : ${j} `);



// Dom manipulation
let head1=document.getElementById("heading1");
head1.innerText="Hello Arfan!!!";
head1.style.backgroundColor="red";
head1.style.color="white";



let ans=prompt("Type a number");

if(ans<=10){
    console.log("Nice");
}
else{
    console.log("By");
}

for(let i=0; i<ans; i++){
    console.log(i);
}