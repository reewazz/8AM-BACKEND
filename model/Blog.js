import mongoose, { Mongoose } from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type:String,
    required:true,
    unique:true
  }, 
  author: String,
  description: String,
  likes:Number,
  image:String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required:true

  }
//   title : {
//     type:String
    
//   }

});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog
