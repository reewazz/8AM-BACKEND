import jwt from "jsonwebtoken"

export const verifyToken = (req,res,next)=> {

    try { 
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).send ("Token not found")
        }

        const token  = authHeader.split(" ")[1]
        const userData = jwt.verify(token,"mern")
        req.user = userData

        console.log(userData)

        next()

    }
    catch(error) {
        console.error(error)
        res.status(401).send ("Invalid token")
    }
}
