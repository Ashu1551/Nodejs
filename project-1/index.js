// const express=require('express')
// const fs=require("fs")
// const users=require("./MOCK_DATA (2).json")
// const app=express()
// const PORT=8000

// //plugin middleware
// app.use(express.urlencoded({extended : false}))

// app.get('/users',(req,res)=>{
//     const html =`
//     <ul>
//     ${users.map((users)=>`<li>${users.first_name}<li>`).join("")}
//     </ul>`;
//     res.send(html);
// })



// // Rest Api

// app.get('/api/users',(req,res)=>{
//     return res.json(users) //list of users
// })

// app.get("/api/users/:id",(req,res)=>{
//     const id =Number(req.params.id);
//     const user=users.find((user)=> user.id===id);
//     res.json(user);
// })

// app.post("/api/users",(req,res)=>{
//     const body =req.body;

//     // console.log("Body",body)
//     users.push({...body,id:users.length+1}) //body ka data frontend usko push backend mai
//     fs.writeFile("./MOCK_DATA (2).json",JSON.stringify(users),(err,data)=>{

//     return res.json({status : "success",id:users.length})
// })

// })

// app.patch("/api/users/:id",(req,res)=>{
//     return res.json({status : "pending"})
// })

// app.delete("/api/users/:id",(req,res)=>{
//     return res.json({status : "pending"})
// })

// // short form
// // app.route("/api/users/:id").get((req,res)=>{
// //     const id =Number(req.params.id);
// //     const user=users.find((user)=> user.id===id);
// //     res.json(user);
// // })
// // .patch((req,res)=>{
// //     return res.json({status : pending})
// // })
// // .delete((req,res)=>{
// //     return res.json({status : pending})
// // })

// app.listen(PORT,()=>{
//     console.log("server start")
// })



// const express = require("express")
// const users=require("./MOCK_DATA (2).json")
// const fs=require("fs")
// const app=express()//instance8
// const PORT=8000


// app.use(express.urlencoded({extended:false}))
// //user define meddleware
// app.use((req,res,next)=>{
//     // req.myusername="Ashu";
//     // console.log("i am in middleware 2 to check captcha")
//     // next();

//     fs.appendFile("log.txt",``)
// })

// app.use((req,res,next)=>{
//     console.log("i am in middleware 1 to authenticate user")
//     next();
// })

// app.get("/users",(req,res)=>{
//     const html = `
//     <ul>
//     ${users.map((users)=>`<li>${users.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);

// })

// //rest api
// app.get("/api/users",(req,res)=>{
//     console.log("i am in path function "+ req.myusername);
//     return res.json(users)
// })

// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id === id)
//     res.json(user);
// })

// app.post("/api/users",(req,res)=>{
//     const body=req.body;
//     // console.log("Body see data aa gya",body)
//     users.push({...body, id:users.length+1})//body ka data frontend se backend me push 
//     fs.writeFile("./MOCK_DATA (2).json",JSON.stringify(users),(err,data)=>{
//         return res.json({status:"success", id:users.length})
//     })
    
// })

// app.patch((req,res)=>{
//     return res.json({status : "pending"})
// })

// app.delete((req,res)=>{
//     return res.json({status : "pending"})
// })


// // app.route("/api/users/:id",()=>{
// //     const id = Number(req.params.id);
// //     const user = users.find((user)=>user.id === id)
// //     res.json(user);
// // }).patch((req,res)=>{
// //     return res.json({status : pending})
// // }).delete((req,res)=>{
// //     return res.json({status : pending})
// // })



// app.listen(PORT,()=>{
//     console.log("server started");
// })





const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA (2).json");
const app = express();
const PORT = 8000;

//middleware-plugin
app.use(express.urlencoded({ extended: false }));

// user defined middle ware
app.use((req,res,next)=>{
  req.myusername="Pankaj";
  console.log("i am in middleware 1 to authenticate user");
  next();
})
app.use((req,res,next)=>{
  fs.appendFile("log.txt",`\n  ${Date.now()} : ${req.ip}  ${req.method}  ${req.path} ` ,(err,data)=>{
    next();
  })
})



// Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

//REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

//only problem is brower send only get reqs
app.post("/api/users", (req, res) => {
  //TODO:create new user
  const body = req.body;
  console.log("Body",body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA (2).json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.patch("/api/users/:id", (req, res) => {
  //TODO:Edit user with id
  let { id } = req.params;

  console.log(req.body, "ghehehehe");

  let newARR = users.find((data) => {
    return data.id == id;
  });
  console.log(newARR);
  newARR.last_name= req.body.last_name;
  console.log(newARR, "updateedddd");

  res.send(newARR);

  // return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  //TODO:Delete the user with id
  let { id }=req.params;
  let newARR=users.filter((data,key)=>{
    return data.id != id;
  })
  res.send(newARR);
});

//lets combine similar routes for diff req
//benefit if u want to change any path ,u can change it once
// app.route("/api/users/:id").get((req,res)=>{
//     const id = Number(req.params.id);
//     const user=users.find((user)=>user.id ===id);
//     return res.json(user)
// })
// .patch((req,res)=>{
//     //edit user with id
//     return res.json({ status: "pending" })
// })
// .delete((req,res)=>{
//      //delete user with id
//      return res.json({ status: "pending" })
//  })

app.listen(PORT, () => console.log(`Server chal pey at ${PORT}`));