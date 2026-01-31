// practice question in javascript
// 1. traffic light system
let color="red";
if(color==="red"){
    console.log("Stop!! light color is red");
}
else if(color==="yellow"){
    console.log("go slow light color is yellow ");
}
else if(color==="green"){
    console.log("enjoy your ride light color is green")
}


// 2. create asystem to calculatepopcorn prices based on the suize customer asked

let size ="xl";
if( size === "xl"){
    console.log("Price is :"+"Rs. :"+250);
} else if(size === "l"){
    console.log("price is Rs. 200")
} else if (size === 'm'){
    console.log("price is Rs. 100");
} else {
    console.log("price is Rs. 50");
}

//  3.  A "good string" is a string that start with the letter 'a' & has a length > 3.write a program to find if a string is good or not.
let str="apple";
if((str[0]==="a") && (str.length > 3)){
    console.log("good string");
} else {
    console.log("not a good string");
}

// 4. use switch statement to print the day of the week

let day=1;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break; 
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("Saturday");
        break; 
    case 7:
        console.log("Sunday");
        break;   
    default :
     console.log("wrong day");
                  
}