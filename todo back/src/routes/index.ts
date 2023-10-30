import { getTodos,updateTodos,deleteTodos,addTodos } from "../controllers/todos";
import { Router } from "express";

const router:Router = Router()

router.get("/todos",getTodos)
router.post("/add-todo",addTodos)
router.put("/edit-todo/:id",updateTodos)
router.delete("/delete-todo/:id",deleteTodos)

export default router