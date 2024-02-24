const fs=require("fs");

// Async.....Non blocking behaviour
console.log("1")
const res=fs.readFile("./test1.txt","utf-8",(err,res)=>{
    console.log(res);
});

console.log("2");


// sync.....blocking behaviour
console.log("1")
const resu=fs.readFileSync("./contact.txt","utf-8");
console.log(resu);
console.log("2");


//Async......Non blocking behaviour
console.log("1")
const result=fs.readFile("./contact.txt","utf-8",(err,result)=>{
    console.log(result);
});

console.log("2");