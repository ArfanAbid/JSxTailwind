const input = document.getElementById('noOfWords');
const container=document.querySelector('.container');
//If you write document.querySelector('container') without the dot, it will try to find an HTML element named "container", not an element with the class "container", which is likely not what you intend.

const generateWords=(n)=>{
let text="";
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i=0;i<n;i++){
    const random=(Math.random()*25).toFixed(0);
    text+=letters[random];
}
return text;

};

let noOfWords;

const generatePara=()=>{
noOfWords=Number(input.value);
const paragraph=document.createElement('p');
let data="";

for(let i=0;i<noOfWords;i++){

    const randomNo=(Math.random()*10).toFixed(0);
    data+=generateWords(randomNo);
    data+=" ";

}

paragraph.innerText=data;
paragraph.setAttribute("class","paras"); // to get css property for p 
container.append(paragraph);

};