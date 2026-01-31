const student={
    name:"raj",
    age:23,
    marks:98,
    city:"deoghar"
};

const item={
    price:110,
    discount:50,
    color:["red","purple"]

}
console.log(item);

// add / update value
const stu={
    namr:"riya",
    age:23,
    marks:94,
    city:"Delhi"
};
console.log(stu);
console.log(stu.city="Mumbai");
console.log(stu.gender="female");
console.log(stu.marks="A");
console.log(stu);
console.log(delete stu.marks);
console.log(stu);

// object of object
const naam={
    aman:{
        grade:"A",
        city:"Pune"
    },
    Priya:{
        grade:"E",
        city:"Nashik"
    },
    Gill:{
        grade:"O",
        city:"Bhuj"
    }
};
console.log(naam);
console.log(naam.Priya);

// genertae a random number between 1 and 100
console.log(Math.floor(Math.random()*100)+1);


// genertae a random number between 1 and 5
console.log(Math.floor(Math.random()*5)+1);

// genertae a random number between 20 and 25
console.log(Math.floor(Math.random()*5)+21);

// guessing game
const max=prompt("enterthe max number: ");
 console.log(max);
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("You are right congrats!! , randon number was", random);
        break;
    } else if(guess < random){
        guess=prompt("your guess are too small, please try again");
    } else {
        guess=prompt("your guess are too large, please try again");
    }
}