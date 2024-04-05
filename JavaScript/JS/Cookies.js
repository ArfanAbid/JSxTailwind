console.log(document.cookie);
 //alert(document.cookie); // cookies seperated by semicolon

document.cookie = "name=Arfan112233";   // here in general it doesn't override the existing cookies instead it add new one as name seperated by the semicolon
document.cookie = "name2=IFFi"; // add new one as name seperated by the semicolon
document.cookie = "name=Arfan";// Now this assignment will update the set above as Arfan112233 to Arfan 


// encodeURIComponent:
// is used to encode the key and value in the cookie bec when you enter the key as "ar=" it will store ar and doesnt store after it because it contains special characters so to avoid these special characters we encode and decode them when needed 

let key=prompt("Enter your key : ");
let value=prompt("Enter your Value : ");

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;


console.log(document.cookie);

console.log(decodeURIComponent("arf%3D%3D"));  // decode
console.log(decodeURIComponent("mar%3D%3B"));  // decode 

// Cookies Options:
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
// You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed.With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.


/* Note:
    -> The name = value pair, after encodeURIComponent ,should not exceed 4KB
    -> Total NO. of cookies per domain is limited to around 20 + (extra NO. is browser dependent) 

*/
