import User from "../models/Users.js";

const getUsers = async(req,res)=>{
 
    const users = await User.findAll();
    console.log(users);
    res.status(200).json({users}) 

}

const setNewUser = async( req , res) =>{
    
    const{name,email,password,category}=req.body;

    
    const user = User.create({
        name,
        email,
        password,
        category
    })
    
    res.status(200).json(user);
}

export {
    getUsers,
    setNewUser
}