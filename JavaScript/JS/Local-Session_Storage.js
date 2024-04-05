const input= document.getElementById("myInput");
const btn=document.getElementById("myBtn");
const deteteBtn=document.getElementById("myBtn1");



const btnClick =() => {
    // sessionStorage.setItem("key1","Arfan");
    // sessionStorage.setItem("key1",input.value);
    // localStorage.setItem("key1",input.value);
    localStorage.setItem("key1",JSON.stringify({name:"Arfan",id:"55"}));  // -> to store multiple object in the form of string we use JSON 

};

btn.addEventListener("click", btnClick)

if(localStorage.getItem("key1")){
    // alert(sessionStorage.getItem("key1"));
    alert(localStorage.getItem("key1"));

}

deteteBtn.addEventListener("click",() =>{
    // sessionStorage.removeItem("key1");
    // localStorage.removeItem("key1");
    // sessionStorage.clear(); // clear complete array
    console.log(JSON.parse(localStorage.getItem("key1"))); // to display back from string to object
});

/* 
Session Storage: upto 5MB
    ->it is only limited to one tab, opening another tab will cause lost of data in session storage
    ->Storage is like an array, so get its value from index 
    ->SS Storsge will be seperate for each tab 
Local Storage: upto 5-10MB depend on the browser
*/


// localStorage and sessionStorage are almost identical and have the same API. The difference is that with sessionStorage , the data is persisted only until the window or tab is closed. With localStorage , the data is persisted until the user manually clears the browser cache or until your web app clears the data.