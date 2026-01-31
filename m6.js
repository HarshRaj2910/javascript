// // function in js


// // 1. question and how to use functiion in js
// // defining function

// function hello(){
//     console.log("hello");
// }

// // calling function
// hello();
// hello();

// // 2. question 
// function printName(){
//     console.log("apnacollege");
//     console.log("aec");
//     console.log("asansol");
// }
// printName();

// // 3. question 
// function isAdult(){
//     let age=18;
//     if(age >= 18){
//         console.log("adult");
//     } else {
//         console.log("not adult");
//     }
// }
// isAdult();

// // user enter the age 
// function isAdult() {
//     let age = parseInt(prompt("Enter your age:"), 10);

//     if (isNaN(age)) {
//         console.log("Please enter a valid number");
//     } else if (age >= 18) {
//         console.log("adult");
//     } else {
//         console.log("not adult");
//     }
// }

// isAdult();

// loop in function
function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();

// print poem using function
function printPoem(){
    console.log("Twinkle Twinkle little star, ");
    console.log("how I wounder what you are");
}
printPoem();

// print dice o/p using random integer
let rand=Math.floor(Math.random()*6)+1;
console.log(rand); 

// using function print diceroll o/p
function rollDice(){
    let rand=Math.floor(Math.random()*6)+1;
console.log(rand); 
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();


// function with single argument 
function printName(name){
    console.log(name);
}
printName("raaj");

// function with multiple arguments
function printInfo(name,age,gender,contact){
    console.log(`${name}'s age is ${age}, gender : ${gender} and contact number:  ${contact}`);
}
printInfo("raaj",23,"male",2536748910);

// sum of two number using function
function sum(a,b){
    console.log(a+b);
}
sum(1,21);
sum(22,56);
sum(9,8);


// average of three numbers
// function avg(c,d,e){
//     console.log((c+d+e)/3);
// }
// avg(2,8,6);
// avg(78,85,96);
// avg(25,-15,-9);
// avg(4,4,10);


function avg(c, d, e) {
    return (c + d + e) / 3;
}

console.log(avg(2, 8, 6));
console.log(avg(78, 85, 96));
console.log(avg(25, -15, -9));
console.log(avg(4, 4, 10));

// print multiplaction table 
// function printTable(){
// let num=parseInt(prompt("enter the number you wannt the table: "),10);
// if(isNaN(num)){
//     console.log("please enter valid number ");
//     return;
// } 
// for(let i=1;i<=10;i++){
//     console.log(`${num} X ${i}=${num * i}`);
// }
// }
// printTable();

// print sum 1 to n 
function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
        console.log(sum);
    }
}
getSum(8);

// print array with concatation
let str=["hi","hello","bye","sorry"];
function concat(str){
    let result="";
    for(let j=0;j<str.length;j++){
        result +=str[j];
    }
    return result;
}
 console.log(str);
console.log(concat(str));

// high order function
function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multipleGreet(greet,4);

// return a function
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    } else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    } else {
        console.log("wromng request!!!");
    }
}
let request="even";
let test=oddEvenTest(request);
test(10);
test(22);