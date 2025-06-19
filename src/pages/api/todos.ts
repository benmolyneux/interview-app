import { eq } from "drizzle-orm";
import { TodosApiRequest, TodosApiResponse } from "../../types";
import { db, initDatabase } from "../../db";
import { todos } from "../../db/schema";

export default async function handler(
  req: TodosApiRequest,
  res: TodosApiResponse
) {
  await initDatabase();

  const { method } = req;

  switch (method) {
    case "GET":
      const getId = parseInt(req.query.id || "");
      if (req.query.id) {
        const todo = await db.select().from(todos).where(eq(todos.id, getId));
        if (todo.length > 0) {
          console.log(getId, todo[0].id);
          res.status(200).json(todo[0]);
        } else {
          res.status(500).json({ message: "Todo not found" });
        }
      } else {
        const allTodos = await db.select().from(todos);
        res.status(200).json(allTodos);
      }
      break;

    case "POST":
      const newTodo = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        completed: false,
      };
      await db.insert(todos).values(newTodo);
      res.status(201).json(newTodo);
      break;

    case "PUT":
      const { id } = req.body;
      const existingTodo = await db
        .select()
        .from(todos)
        .where(eq(todos.id, id));
      if (existingTodo.length === 0) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }

      const updatedTodo = { ...existingTodo[0], ...req.body };
      await db.update(todos).set(updatedTodo).where(eq(todos.id, id));
      res.status(200).json(updatedTodo);
      break;

    case "DELETE":
      res
        .status(200)
        .json({ message: `Todo failed to delete. There is no logic here!` });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
