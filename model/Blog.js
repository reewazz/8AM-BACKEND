import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, 
  author: String,
  description: String,
  likes:Number,
  image:String,
//   title : {
//     type:String
    
//   }

});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog
