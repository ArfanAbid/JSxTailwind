const heading=document.getElementById('heading');
const box1=document.getElementById('box1');
const btn=document.getElementById('mybtn');
const btn2=document.getElementById('mybtn2');
const btn5=document.getElementById('mybtn5');
const input=document.getElementById('input');
const input1=document.getElementById('myInput');

// btn.addEventListener('click',function name/or function);
// btn.addEventListener('click',() =>{
//     box1.classList.add('text-2xl','p-2','bg-blue-200' ,"roundex-2xl") // adding class with  tailwindcss properties . 
// })

// Hover functionality like
btn.addEventListener('mouseover',()=>{
    btn.classList.add('border-4','border-yellow-200','bg-blue-200' );
})
btn.addEventListener('mouseout',()=>{
    btn.classList.remove('border-4','border-yellow-200','bg-blue-200' );
})


// when u right click it then its color will be changed
// btn2.addEventListener('contextmenu',()=>{
//     btn2.classList.add('bg-purple-200' );
// })


// when u right click it then its color will be changed but also its right click menue will  not be dispayed
btn2.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    btn2.classList.add('bg-purple-200' );
});


//for whole body
addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    btn.classList.add('blur-md');

});

//X and Y axix
addEventListener('click',(e)=>{
    console.log(e.clientX)
    console.log(e.clientY)

});

// Example Like black and white upon double and single click
box1.addEventListener('dblclick', () => {
    document.body.classList.add('bg-yellow-400');
});
box1.addEventListener('click', () => {
    document.body.classList.remove('bg-yellow-400');
});

input.addEventListener('change',() => {
    console.log("Changing event started now");

});

// ------------- see // removed but arrow function default ///
function addClasses() {
    box1.classList.add('text-2xl', 'p-2', 'bg-indigo-200', 'rounded-2xl');
    // Remove the event listener for addClasses
    btn.removeEventListener('click', addClasses);
}

// Add event listener to the button to trigger addClasses function
btn.addEventListener('click', addClasses);



const btnClick =() => {

    alert(input1.value);
};

btn5.addEventListener("click", btnClick)