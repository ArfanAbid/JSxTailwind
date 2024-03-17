const myfunc=function(a,b){
    console.log(a+b);
};
myfunc(1,2);

// Arrow Function 

const Newfunc = (a,b)=>{
    console.log(a+b);
}

myfunc(5,2);


// Array Methods


const arr=[2,33,5,6,77];

arr.find((value,index)=>{
console.log(value);

});

const arr1=[2,33,5,6,77];
// find
arr1.find((value,index)=>{
    if (value==6){
        console.log(value);

    }
});
// filter
const restult=arr1.filter((value,index)=>{
    if (value > 6){
        return value;

    }

});
console.log(restult);
// every & some
const result1=arr1.every((value,index)=>{  // sone if is present return true
        return value > 6;

});
console.log(result1);

// for of and for each
for (const value of arr){
    console.log(value)
};

arr.forEach((value,index)=>{
console.log(index);
});
// map
const result2=arr1.map((value,index)=>{  
    return value +10;

});
console.log(result2);
console.log(arr);
