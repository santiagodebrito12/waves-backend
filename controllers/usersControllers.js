import User from "../models/Users.js";

const getUsers = async(req,res)=>{
   
}

const setNewUser = async( req , res) =>{
    
    const name ="italo";
    const email ="italo@gmail.com";
    const password ="12";
    const category = "surfing";
    

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