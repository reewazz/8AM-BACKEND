import Blog from "../model/Blog.js"

 export const getAllBlogs =  async(req,res)=> {
  const blogs = await Blog.find()
  res.json(blogs)
}



 


