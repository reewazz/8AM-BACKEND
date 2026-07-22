import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import { createBlog, getAllBlogs } from "./controllers/blogControllers.js";
import { CreateCategory } from "./controllers/categoryControllers.js";
import blogRoutes from "./routes/blogRoutes.js"
import authRoutes from  "./routes/authRoutes.js"

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


app.use("/blog",blogRoutes)
app.use("/auth",authRoutes)




app.post("/firstpost", (req, res) => {
  const myresponse = req.body;
  res.send(`welcome to the backend ${req.body.name}`);
});





app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
