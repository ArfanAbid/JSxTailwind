const btn=document.querySelector('button');

const printName=(name,gender)=>{
    const income=Math.floor(Math.random()*1000);
    console.log(`Welcome ${name}. Your income is ${income}.Your gender is ${gender}`);
    console.log(new Date(Date.now()));  // Date 
};

// setTimeout(funcName,timein MS,Arguments); 
setTimeout(printName,4000,'Arfan','MALE'); 
const customTimeOut=setTimeout(printName,5000,'iffi','MALE'); 

btn.addEventListener('click',()=>{
    // clearTimeout(customTimeOut);// when we click then set time out function will be clerated i.e it does not call 
    clearInterval(id);
});

const id=setInterval(printName,1000,'iffionex','MALE'); 
