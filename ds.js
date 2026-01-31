// Data Structure in JS

let students=["mona","aman","buddy"];
console.log(students);

let info=["raj",5,2.2];
console.log(info,info.length);


let fruits=["mango","apple","banana"];
console.log("before change",fruits);
fruits[0]="banana";
fruits[2]="mango";
console.log("after change", fruits);
fruits[12]="grapes";

console.log(fruits.length);

// push method in array
console.log(fruits.push("watermelon"));
console.log(fruits);
// pop method in array
console.log(fruits.pop());
console.log(fruits);
// unshift method in array
console.log(fruits.unshift("lichi"));
console.log(fruits);
// unshift method in array
console.log(fruits.shift());
console.log(fruits);
// concat method 
let primary=["red","yellow","blue"];
let secondary=["orange","green","violet"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));
// reverse method
console.log(primary.reverse());
// slice method 
let color=["red","yellow","blue","orange","green","violet"];
console.log(color.slice(0,3));
console.log(color.slice());
console.log(color.slice(-2));
console.log(color.slice(2));
// splice method
console.log(color.splice(4));
console.log(color.length);
console.log(color);
console.log(color.splice(0,1));
console.log(color.splice(0,1,"black","grey"));
console.log(color);
console.log(color.length);
console.log(color.splice(0,0,"sky blue","baby pink"));
console.log(color);
// sort method
console.log(color.sort());
console.log(color);
// constant array method
const arr=[1,2,3];
console.log(arr.push(5,6,9));
console.log(arr);

// nested array
let nums=[[1,2],[5,6],[8,3]];
let nums1=[[4,2],[36,6],[8,24]];
console.log(nums);
console.log(nums1);
console.log(nums[2][0]);
console.log(nums);