
const User = require("../models/user.js");


async function handleGetAllUser(req, res) {
    const allDBUsers = await User.find();
    return res.json(allDBUsers)
}





async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "mujhe ni mila user" })
    res.json(user);

}




async function handleCreateUser(req, res) {
    const body = req.body;
    console.log(body);
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "all fields are required" })
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    return res.status(201).json({ msg: "Data has Been sent" })

}






async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" })
    return res.json({ status: "success" })

}
async function handleDeleteByUserId(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Deleted Successfully" })

}




module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleCreateUser,
    handleDeleteByUserId,
    handleUpdateUserById
}