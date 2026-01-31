
// // assignment question
// // 1. delete all occurences of element in a given array
// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//         i--;
//     }
    
// }
// console.log(arr);

// // 2. 
// let number=287152;
// let count=0;
// let copy=number;
// while(copy > 0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// 3. 
let number=287152;
let sum=0;
let copy=number; 
while(copy > 0){
    digit=copy % 10;
    sum+=digit;
    copy=Math.floor(copy/10);
}
console.log(sum);

// 4. 
let n=5;
let factorial=1;
for(let i=1;i<=n;i++){
    factorial*=i;
}
console.log(`factorial of ${n} is ${factorial}`);

//5. 
let arr=[1,2,5,7,8,12,6];
let largest=0;
for(let i=0;i<=arr.length;i++){
    if(largest < arr[i]){
        largest=arr[i];
    }
}
console.log(largest);