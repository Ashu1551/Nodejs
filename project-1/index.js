const express=require('express')
const fs=require("fs")
const users=require("./MOCK_DATA (2).json")
const app=express()
const PORT=8000

//plugin middleware
app.use(express.urlencoded({extended : false}))

app.get('/users',(req,res)=>{
    const html =`
    <ul>
    ${users.map((users)=>`<li>${users.first_name}<li>`).join("")}
    </ul>`;
    res.send(html);
})



// Rest Api

app.get('/api/users',(req,res)=>{
    return res.json(users) //list of users
})

app.get("/api/users/:id",(req,res)=>{
    const id =Number(req.params.id);
    const user=users.find((user)=> user.id===id);
    res.json(user);
})

app.post("/api/users",(req,res)=>{
    const body =req.body;

    // console.log("Body",body)
    users.push({...body,id:users.length+1}) //body ka data frontend usko push backend mai
    fs.writeFile("./MOCK_DATA (2).json",JSON.stringify(users),(err,data)=>{

    return res.json({status : "success",id:users.length})
})

})

app.patch("/api/users/:id",(req,res)=>{
    return res.json({status : "pending"})
})

app.delete("/api/users/:id",(req,res)=>{
    return res.json({status : "pending"})
})

// short form
// app.route("/api/users/:id").get((req,res)=>{
//     const id =Number(req.params.id);
//     const user=users.find((user)=> user.id===id);
//     res.json(user);
// })
// .patch((req,res)=>{
//     return res.json({status : pending})
// })
// .delete((req,res)=>{
//     return res.json({status : pending})
// })

app.listen(PORT,()=>{
    console.log("server start")
})