// 1. print if the number is divisible by 10 if yes print good or no then print bad
let num=20;
if(num % 10 == 0){
    console.log("good");
} else {
    console.log("bad");
}

// 2. take the user name and input using prompt

let username = prompt("Enter your name:");
let age = prompt("Enter your age:");
alert(`${username} is ${age} years old.`);


// 3. print month in a quater
let quater = 1;
switch(quater){
    case 1: console.log("January,February,March");
    break;
    case 2: console.log("April,May,June");
    break;
    case 3: console.log("July,August,September");
    break;
    case 4: console.log("October,Number,December");
    break;
    default:
        console.log("error");
}

// 4. 
let str="apple";
if((str[0]==='a' || start[0] == 'A') && (str.length > 5)){
    console.log("golden string");
} else {
    console.log("not a golden string");
}

// 5. largest of 3 number

let a=23;
let b=45;
let c=55;
if(a>b){
    if(a > c){
        console.log(a,"is largest");
    } else {
        console.log(c,"is largest");
    }
}else {
    if(b>c){
        console.log(b,"is largest");
    } else {
        console.log(c,"is largest");
    }
}


// 6. 
let num1=32;
let num2=47852;
if((num1 % 10)==(num2 % 10)) {
    console.log("number have the same last digit which is ", num1 % 10);
} else {
    console.log("numbers don't have the same last digit ");
}