import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import { getAllBlogs } from "./controllers/blogControllers.js";

const app = express();
app.use(cors());

dotenv.config()

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

connectDB()

const products = [
  {
    id: 1,
    name: "product 1",
    price: 300,
  },
  {
    id: 2,
    name: "product 2",
    price: 600,
  },
];
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/abc", (req, res) => {
  res.send("This is from another page");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const filteredProducts = products.filter((item, index) => item.id === +id);
  console.log(filteredProducts);
  res.json(filteredProducts);
});

// app.get("/blog", (req, res) => {
//   res.send("this is blog page");
// });


app.post("/blog", async(req, res) => {
  const response = await Blog.create({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    likes: 1000,
    image: req.body.image,
  });

  res.send("Blog created successfully")
});
app.get ("/getAllBlogs", getAllBlogs)

app.get("/blog/:id", async(req,res)=> {
  console.log("getting blog")
  const blogs = await Blog.findById(req.params.id)
  res.json(blogs)

})

app.put ('/blog/:id',async(req,res)=> {
  console.log("updating blog")
  const updatedblog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.json(updatedblog)

})


app.delete("/blog/delete/:id", async(req,res)=> {
  const blogs = await Blog.findByIdAndDelete(req.params.id)
  res.send("Deleted Successfully")

})
app.get("/title/:title", async(req,res)=> {
  
  const blogs = await Blog.find({title : req.params.title})
  res.json(blogs)
})

app.post("/firstpost", (req, res) => {
  const myresponse = req.body;
  res.send(`welcome to the backend ${req.body.name}`);
});





app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
