//file handling
const fs=require("fs");
// console.log(fs)

//sync ..... blocking operations
// fs.writeFileSync("./text1.txt","hiii i am ashu");


// //Async .....Non blocking operations
// fs.writeFile("text2.txt","hello guys",(err)=> {});



// const result =fs.readFileSync("./contact.txt","utf-8");
// console.log(result)


// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){console.log("meri marzii ni chala to kya",err)}
//     else{console.log(result)}
// });

// fs.appendFileSync("./test1.txt","\n hii modi ji \n");

// fs.appendFileSync("./test2.txt",new Date().getTime().toLocaleString());

// fs.appendFileSync("./test2.txt",`\n ${Date.now()} hello from the server \n`);

// fs.cpSync("./contact.txt","./copy.txt");  copy file

// fs.unlinkSync("copy.txt");   delect file

// fs.mkdirSync("my-doc");  create folder