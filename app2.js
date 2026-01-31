console.log("before  if statement")
let age=16;
if(age >= 18){
    console.log("you can vote ...")
    console.log("you can drive..")
    let a=9;
    console.log(5*a);
}
if(age < 20){
    console.log("you cannot vote")
}
console.log("after if statement")


let firstName="milan";
if(firstName == "milan"){
    console.log(`Welcome ${firstName} Milan`)
}

let agee=14;
if(agee > 18){
    console.log("you can vote");
} else if (agee <18){
    console.log("you can not vote");
}


let marks=81;
if(marks >= 80){
    console.log("A+");
} else if (marks >= 60){
    console.log("A");
} else if(marks >= 33){
    console.log("B");
} else if(marks < 33){
    console.log("F");
}

// nested if else
let mark=83;
if(mark >= 33){
    console.log("pass");
    if(mark >=81){
        console.log("Grade : E");
    } else {
        console.log("Grade is A");
    }
} else {
    console.log("better luck next time!");
}

// switch statement
let color="green";
switch(color){
    case "red":
    console.log("stop!");
    break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;    
    default :
    console.log("broken light");
}

alert("something is wrong!");  // popup warning
console.log("this is simple log");
console.error("this is wrong msg");  // pasword error

let firstname = prompt("enter your name: ");
let lastname=prompt("enter your last name: ");
console.log("welcome",firstname,lastname,"!");