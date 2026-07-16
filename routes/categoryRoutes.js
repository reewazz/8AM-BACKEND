import express from 'express'
import { CreateCategory, deleteCategory, getAllCategories, getCategoryById, getCategoryByTitle, updateCategory } from '../controllers/categoryControllers.js'

const router = express.Router();

router.post("/", CreateCategory);

router.get("/getAllCategories", getAllCategories);

router.get("/:title", getCategoryByTitle);

router.get("/:id", getCategoryById);

router.put("/:id", updateCategory);

router.delete("/delete/:id", deleteCategory);