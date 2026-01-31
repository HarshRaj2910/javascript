            // 1.  .trim() method in JS

// let msg=" hello ";

let pass = prompt("enter your password");
console.log(pass.trim());

            // 2.   .toUpperCase() &  .toLowerCase()  

 let str="Stranger Thing";
console.log( str.toUpperCase());
 console.log(str.toLowerCase());

                // 3. Arguments(indexOf("args")) in JS

let str1="ILoveCoding";
str1.indexOf("Love");

                // 4. chaining method in JS
let nm=" hello ";
let newmsg=nm.trim().toUpperCase();
console.log(newmsg);
// console.log("after trim: ", nm.trim());
// console.log("after uppercase: ", nm.toUpperCase());

                // 5.slice method in JS
console.log(nm.slice(0,4));
console.log(nm.slice(2));
console.log(nm.slice(-3));

// 6. replace method in js
let msg="iLoveCoding";
console.log(msg.replace("Love","learn"));
console.log(msg.replace("i","Must"));

// 7. repeat method in js
let msg1="iLoveCoding";
console.log(msg1.repeat(5));