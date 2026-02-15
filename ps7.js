//  write an arrow function that returns the square of a number'n'.
const sqr=(n)=> n*n;
console.log(sqr(7));

// write a function that prints "hello world" 5 times at intervals of 2s each.
// const id=setInterval(()=>{
//     console.log("Hello World!!");

// },2000);
// setTimeout(()=>{
//     clearInterval(id);
// },10000);


let count = 0;

const id = setInterval(() => {
    count++;
    console.log("Hello World!!");

    if (count === 5) {
        clearInterval(id);
    }
}, 2000);
