const express=require('express')

const router=express.Router()


router.get("/", async(req, res) => {
    const allDbUsers=await User.find({});
    return res.json(allDbUsers)
  });

router.get("/:id", async(req, res) => {
const user = await User.findById(req.params.id)
if(!user) return res.status(404).json({error : "mujhe ni mila user"})

});

router.post("/", async (req, res) => {
  const body = req.body;
    console.log(body)
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all fields are required" });
  }

  //CONNECT WITH DB
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  res.sendStatus(200).json({ msg: "data sent" });
});

router.patch("/:id", async(req, res) => {
  await User/findByIdAndUpdate(req.params.id,{ lastName : "changed"})
  return res.json({status :"success"})
});

router.delete("/:id", async(req, res) => {
  await User.findByIdAndDelete(res.params.id)
  return res.json({status : "Deleted Successfully"})
});

module.exports=router;