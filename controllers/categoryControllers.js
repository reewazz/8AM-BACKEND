import Category from "../model/Category.js"

export const CreateCategory = async (req, res) => {
  try {
    const createdCategory = await Category.create(req.body);
    res.status(201).json(createdCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create");
  }
};
export const getAllCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
  };
  
  export const getCategoryById = async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json(category);
  };
  
  export const updateCategory = async (req, res) => {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.json(updatedCategory);
  };
  
  export const deleteCategory = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.send("Category deleted successfully");
  };
  
  export const getCategoryByTitle = async (req, res) => {
    const categories = await Category.find({
      title: req.params.title,
    });
  
    res.json(categories);
  };

