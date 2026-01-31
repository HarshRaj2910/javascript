// 1. trim & convert it to uppercase

let msg="help!";
console.log(msg.trim().toUpperCase());

// 2. JS methods
let nme="ApnaCollege";
console.log(nme.slice(4,9));
console.log(nme.indexOf("na"));
console.log(nme.replace("Apna","Our"));
console.log(nme.slice(4));
console.log(nme.replace("l","t"));

// 3. array change
let arr=["januray", "july","march","august"];
console.log(arr);
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.unshift("june"));
console.log(arr.unshift("july"));
console.log(arr);

// 4. using splice method 
console.log(arr.splice(0,2,"july","june"));
console.log(arr);

// 5.reverse array
let lang=["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.reverse().indexOf("javascript"));
console.log(lang);

//6. nested array using tic rtac game 
let ch=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(ch);
console.log(ch[0][1]);
console.log(ch[0][1]="O");
console.log(ch);

// assignment question
// 1. question
let num=[7,9,0,-2];
let n=3;
let ans=num.slice(0,n);
console.log(ans);

//2.question 
let anss=num.slice(num.length-n);
console.log(anss);

// 3. question
let str= prompt("please enter a string");
if(str.length == 0){
    console.log("string is empty");
} else {
    console.log("string is not empty");
}