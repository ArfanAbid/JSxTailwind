// JavaScript is inherently synchronous, but you can make it asynchronous by utilizing features like callbacks, promises, and async/await syntax.

function sum(a,b,fun){ // HighOrder function
    const result= a+b;
    fun(result); 

};

function displaySum(result){
    const h1=document.querySelector("h1");
    h1.innerText=result;

};

sum (20,30,displaySum); // Callback function
// sum (20,130,alert);  // Callback function



// another example

const arr=[1,2,3,4,5,6,7,8,9,10];

function Calculator(arr=[],Callback){
    const ans=[];
    for(let i=0;i<arr.length;i++){
        const result=Callback(arr[i]);
        ans.push(result);
    }
    console.log(ans);
};

function multiply(a){
    return a*10;
};
function divide(a){
    return a/10;
};

Calculator(arr,multiply);//Calculator(arr,(a) =>a*10);
Calculator(arr,divide);//Calculator(arr,(a) =>a/10);


// Imp Example Regarding APIs in production

const gamesList = [];

const fetchData=(callbacks) =>{
    setTimeout((callbacks) =>{
        gamesList.push(
            {
                id:'01',
                name:'Arfan'
            },
            {
                id:'02',
                name:'Iffi'
            },
            {
                id:'03',
                name:'Iffionex'
            }
        );
        console.log(" ConsoleLog After fecthing....")
        callbacks();
    },4000,callbacks)
};


const displayGame=() =>{
    setTimeout(() =>{
        
        for (let i = 0; i < gamesList.length; i++) {

            // creating new tag 
            const p= document.createElement("p");
            p.innerText=gamesList[i].name;
            document.body.append(p);
            
        }
        console.log("Consolelog after displaying.");

    },1000);
};

fetchData(displayGame);

// Here first fetchData fucntion will be called with perimeter function (not called only name ) diaplayGame
// when it reach fetchData it will wait for 4 sec and pass callback to settimeout then execute the displayGame function (aka callback)
// In displayGame it will wait for 1 sec and then make a p tag ... 