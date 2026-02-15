// this keyword
const stu={
    name:"raaj",
    age:23,
    eng:96,
    math:94,
    phy:97,
    getAvg() {
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}
stu.getAvg();

// try and catch 
console.log("hello");
console.log("hello");
try{
    console.log(a);
  } catch (err){
    console.log("caught error : ");
    console.log(err);
  };
console.log("hello world!!");
console.log("hello world!!");
console.log("hello world!!");

// arrow function \
const cube=(n)=> {
    return n*n*n;
}
console.log(cube(3));

const mul=(a,b)=>(a*b);
console.log(mul(5,6));

// setTimeout(function,timeout)  -> api call uses
// here function is a callback function ,  Callback func -> passed as an argument 
console.log("Hi there!!");
setTimeout( ()=>{
    console.log("India will again become Champion in T20 world cup")
},4000);
console.log("Welcome Again Champions!!")