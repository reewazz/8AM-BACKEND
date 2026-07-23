import { createBlog, getAllBlogs, getBlogsByCategory } from "../controllers/blogControllers.js"
import express from "express"
import { verifyToken } from "../middlewares/authMiddleware.js";


const router = express.Router()

router.get ("/getAllBlogs", verifyToken, getAllBlogs)

  
  router.post("/", createBlog);

  router.get('/byCategory/:id',getBlogsByCategory)
  
  router.get("/:id", async(req,res)=> {
    const blogs = await Blog.findById(req.params.id)
    res.json(blogs)
  
  })
  
  router.put ('/:id',async(req,res)=> {
    console.log("updating blog")
    const updatedblog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(updatedblog)
  
  })
  
  
  router.delete("/delete/:id", async(req,res)=> {
    const blogs = await Blog.findByIdAndDelete(req.params.id)
    res.send("Deleted Successfully")
  
  })
  
  



export default router
