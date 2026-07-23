import User from "../model/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const createUser = async(req, res) => {

try{

  const existingUser = await User.findOne({email:req.body.email})

  if (existingUser) {
    return res.status(400).send("email already exists")
   
  }




  const {email,password} = req.body
  const hashedPassword = await bcrypt.hash(password,10)


  const response  = await User.create({
    email : email,
    password :hashedPassword
  })
  res.json(response)
}
catch(error) {
  console.error(error)
  res.json(error)
}
}



export const login = async (req,res)=> {
 
try{
    // const {email,password} = req.body

  const userData = await User.findOne({email:req.body.email})

  if (!userData) {
    return res.status(400).send("email or password is incorrect ")
   
  }


  const isMatch = await bcrypt.compare(req.body.password,userData.password)
    if (!isMatch) {
    return res.status(400).send("email or password is incorrect ")
    }


    const token = jwt.sign({
      id: userData.id,
      email: userData.email
    }, process.env.JWT_SECRET)

    const formattedResponse = {
      message : "Logged In Successfully",
      email : userData.email,
      id : userData._id,
      token : token
    }
 
  res.json(formattedResponse)
}
catch(error) {
  console.error(error)
  res.json(error)
}


}