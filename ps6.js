// 1. return array elements larger than a number
let arr=[8,9,10,12,5,2,3,4,6];
let num=2;

function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);
// 2. unique elementys charcaters from a string
let str="abcdabcdefggh";
function getUnique(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let currChar=str[i];
        if(ans.indexOf(currChar)==-1){
            ans+=currChar;
        }
    }
    return ans;
}
getUnique(str);