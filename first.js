let todo=[];
let req= prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        console.log("-----------------");
        for(let i=0;i<todo.length;i++){  // delete portion
            console.log(i,todo[i]);
        }
        for(task of todo){
            console.log(task);

        }
        console.log("-----------------");
    } else if(req=="add"){
        let task=prompt("plaese enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if(req=="delete"){
        let del=prompt("please enter the task index");
        todo.splice(del,1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }
    req=prompt("please enter your request");
}