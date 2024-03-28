// Import database
const userDB=require("../schema/schema")

const home=async(req,res)=>{
    try {
        res.status(200).send("Hello");
    } catch (error) {
        res.status(400).send(error);
    }
}

const register=async(req,res)=>{
    try {
        const{username, email, password  }=req.body;
        const userExist=await userDB.findOne({email});

        if(userExist){
            res.status(400).json({msg:"Email already exist"});
        }

        const userCreate=await userDB.create({username,email,password});

        req.status(200).json(userCreate);

    } catch (error) {
        console.log(error);
    }
}

module.exports={home,register};