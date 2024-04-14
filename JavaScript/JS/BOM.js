            // Navigators

navigator.geolocation.getCurrentPosition((d)=>{
    console.log(d);
    console.log(d.coords);
},
(e) => console.log(e)
);


            // History

console.log(history);

            // back and forward

const back = () => history.back();
// const forward = () => history.forward();


            // Location

console.log(location);            
console.log(location.protocol); 
console.log(location.hostname);            
console.log(location.port);            
console.log(location.pathname);            
console.log(location.host); 

console.log(location.href); 


console.log(location.search); 


const func1=() => location.reload();


const func2=() => location.assign("https://www.youtube.com/channel/UClIU3-dWJ4MSf-aJb9HYyVg"); // includes  back option -> create new document
// const func2=() => location.replace("https://www.youtube.com/channel/UClIU3-dWJ4MSf-aJb9HYyVg"); // no back button -> replace previous doc

