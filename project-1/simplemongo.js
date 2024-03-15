const express = require("express");
const {connectMongoDb}=require("./connection")
const {logReqRes}=require("./middleware/index")
const userRouter=require("./Routes/user")
// const fs = require("fs");
// const mongoose = require("mongoose");
// const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/dholakpur").then(() => {
  console.log("MangoDB Connected");
})

//middleware-plugin
app.use(express.urlencoded({ extended: false }));

app.use(express.json())

app.use(logReqRes("log.txt"))

//routes
app.use("/api/users",userRouter)


// mongoose
//   .connect("mongodb://127.0.0.1:27017/dholakpur")
//   .then(() => {
//     console.log("MangoDB Connected");
//   })
//   .catch((err) => {
//     console.log("MangoDB error", err);
//   });

// //SCHEMA
// // const UserSchema = new mongoose.Schema({
// //   firstName: {
// //     type: String,
// //     required: true,
// //   },
// //   lastName: {
// //     type: String,
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //   },
// //   gender: {
// //     type: String,
// //   },
// //   job_title: {
// //     type: String,
// //   },
// // });
// // const User = mongoose.model("user", UserSchema);

// //Plugin middleware
// // app.use(express.urlencoded({extended : false})

// //user defined Middleware
// // app.use((req,res,next)=>{
// //   console.log("I am middleware1 to check user")
// //   // req.myusername='chotu';
// //   next()
// // })

// // app.use((req,res,next)=>{
// //   // console.log("I am middleware2 to check captcha")
// //   // req.cardmunber=123;
// // fs.appendFile("log1.txt", \n ${Date.now()} : ${req.ip} ${req.method} ${req.path}, (err,data)=>{
// //   next();
// // })

// // })

// //REST API
// // app.get("/api/users", (req, res) => {
// //   // console.log("hlw i am path function "+ req.myusername + "and my card num is"+ req.cardmunber);
// //   return res.json(users); //list of users
// // });

// app.get("/api/users", async(req, res) => {

//     const allDbUsers=await User.find({});
//     return res.json(allDbUsers)
//   });

// app.get("/api/users/:id", async(req, res) => {
// const user = await User.findById(req.params.id)
// if(!user) return res.status(404).json({error : "mujhe ni mila user"})

// });

// app.post("/api/users", async (req, res) => {
//   const body = req.body;
//     console.log(body)
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     return res.status(400).json({ msg: "all fields are required" });
//   }

//   //CONNECT WITH DB
//   const result = await User.create({
//     firstName: body.first_name,
//     lastName: body.last_name,
//     email: body.email,
//     gender: body.gender,
//     jobTitle: body.job_title,
//   });
//   res.sendStatus(200).json({ msg: "data sent" });
// });

// app.patch("/api/users/:id", async(req, res) => {
//   await User/findByIdAndUpdate(req.params.id,{ lastName : "changed"})
//   return res.json({status :"success"})
// });

// app.delete("/api/users/:id", async(req, res) => {
//   await User.findByIdAndDelete(res.params.id)
//   return res.json({status : "Deleted Successfully"})
// });

// // app.route("/api/users/:id").get((req,res)=>{
// //   const id = Number(req.params.id);
// //   const user = users.find((user) => user.id === id);
// //   res.json(user);
// // })
// // .patch((req,res)=>{
// //   return res.json({status:pending});

// // })
// // .delete((req,res)=>{
// //   return res.json({status:pending});
// // })

app.listen(PORT, () => {
  console.log("server strt");
});