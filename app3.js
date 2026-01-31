// // for loop in JS
// let n=9;
// for(let i=1;i<=n;i++){
//     console.log(i);
// }
// // print all odd number ( 1 to 15)
// // method 1
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }
// // method 2
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
// // print all odd number (19 to 1)
// for(let i=19;i>=1;i--){
//     if(i%2 !=0){
//         console.log(i);
//     }
// }
// // print all even number( 2 to 10)
// for(let i=2;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// // table of 5

// for(let i=1;i<=10;i++){
//     console.log(`5 X ${i}=${5*i}`);

// }

// // print table of any number given by the user
// let m=parseInt(prompt("write your number: "));
// // method 1
// for(let i=1;i<=10;i++){
//     console.log(`${m} x ${i}=${m*i}`);
// }
// // method 2
// let y=prompt("write your number: ");
// y=parseInt(y);
// for(let i=y;i<=y*10;i=i+y){
//     console.log(i);
// }

// // while loop
// let i=1;
// while(i<=9){
//     console.log(i);
//     i++;
// }

// let i1=1;
// while(i1<=90){
//     if(i1 % 2 == 0){
//         console.log(i1);
        
//     }
//     i1++;
// }

// // while loop game
// const favmov="Ramayan";
// let guess=prompt("guess my favourite movies");
// while(guess != favmov) {
//     if(guess == "quit"){
//         console.log("you are quit the game");
//         break;
//     }
//     guess=prompt("wrong please try again!!");
// } 
// if(guess == favmov){
//     console.log("congrats!!");
// } 
// loop with array
// let lang=["c","c++","html","javascript","python","java","c#","sql"];
// for(let i=0;i<lang.length;i++){
//     if(i%2 !=0){
//     console.log(i,lang[i]);
  
//     }
// }

// // reverse order
// for(let i=lang.length-1;i>=0;i--){
//     console.log(i,lang[i]);
// }

// nested loop with nested array
let heroes=[["ironman","hulk","thor"],["spiderman","blackwido","captain"]];
// outer loop
for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    // inner loop individual prints charcaters
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

// students and marks
let std=[["aman",98],["priya",99],["radha",63]];
for(let i=0;i<std.length;i++){
    console.log(`info of student #${i+1}`);
    for(let j=0;j<std[i].length;j++){
        console.log(std[i][j]);
    }
}

// for of loop
let langs=["c","c++","html","javascript","python","java","c#","sql"];
for(lang of langs){
    console.log(lang);
}

for( char of "apnacollege"){
    console.log(char);
}

// nested for of loop
let man=[["ironman","hulk","thor"],["spiderman","blackwido","captain"]];
for(list of man){
   for(hero of man){
    console.log(hero);
   }
}