import Blog from "../model/Blog.js"

 export const getAllBlogs =  async(req,res)=> {
  const blogs = await Blog.find().populate('category','title status')
  res.json(blogs)
}

export const createBlog = async(req, res) => {

try{

  const existingTitle = await Blog.findOne({title:req.body.title})
  console.log(existingTitle)



  if (existingTitle) {
    return res.status(400).send("title already exists")
   
  }

  const response  = await Blog.create(req.body)
  res.json(response)
}
catch(error) {
  console.error(error)
  res.json(error)
}
}



 export const getBlogsByCategory = async (req,res)=> {
  
  const response = await Blog.find({category:req.params.id})
  res.json(response)

 }


