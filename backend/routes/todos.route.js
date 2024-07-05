import { Router } from "express";
const router = Router();
import User from "../models/user.model.js";
import Todo from "../models/todos.model.js";

//CREATE
router.post("/add", async (req, res) => {
  try {
    const { title, description, email } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      const newTodo = new Todo({
        title,
        description,
        user: existingUser._id,
      });
      await newTodo.save();
      existingUser.list.push(newTodo);
      existingUser.save();
      res.status(200).json({ message: "Todo added successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: "Todo failed to upload" });
  }
});

//UPDATE
router.put("/update/:id", async (req, res) => {
  try {
    const { title, description, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const todo = await Todo.findByIdAndUpdate(req.params.id, {
        title,
        description,
      });
      todo.save();
      res.status(200).json({ message: "Updated successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to update" });
  }
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    );
    if (existingUser) {
      await Todo.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to delete" });
  }
});

//READ
router.get('/todos/:id',async (req,res)=>{
    try {
        const todos = await Todo.find({user:req.params.id}).sort({createdAt:-1});
        
        if(todos.length!=0){
          res.status(200).json(todos);
        }else{
          res.status(200).json({message:"No todos found"});
        
        }
    } catch (error) {
        res.status(400).json({message:"Failed to fetch todos"})        
    }
})

export default router;
