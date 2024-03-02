const express=require('express')
const users=require("./MOCK_DATA (2).json")
const app=express()
const PORT=8000

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

app.listen(PORT,()=>{
    console.log("server start")
})