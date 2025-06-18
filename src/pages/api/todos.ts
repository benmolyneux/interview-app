import cache from "memory-cache";
import { Todo, TodosApiRequest, TodosApiResponse } from "../../types";

if (!cache.get("todos")) {
  cache.put("todos", [
    {
      id: 1,
      title: "Complete project setup",
      description: "Set up the initial project structure and dependencies",
      date: "2024-01-15",
      completed: false,
    },
    {
      id: 2,
      title: "Write API endpoints",
      description: "Implement CRUD operations for todos",
      date: "2024-01-16",
      completed: true,
    },
    {
      id: 3,
      title: "Create UI components",
      description: "Build the frontend interface for managing todos",
      date: "2024-01-17",
      completed: false,
    },
  ] as Todo[]);
}

export default function handler(req: TodosApiRequest, res: TodosApiResponse) {
  const { method } = req;
  const todos: Todo[] = cache.get("todos") || [];

  switch (method) {
    case "GET":
      res.status(200).json(todos);
      break;

    case "POST":
      const newTodo: Todo = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        completed: false,
      };
      const updatedTodos: Todo[] = [...todos, newTodo];
      cache.put("todos", updatedTodos);
      res.status(201).json(newTodo);
      break;

    case "PUT":
      const { id } = req.body;
      const todoIndex: number = todos.findIndex(
        (todo) => todo.id === Number.parseInt(id.toString())
      );
      if (todoIndex === -1) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      todos[todoIndex] = { ...todos[todoIndex], ...req.body };
      cache.put("todos", todos);
      res.status(200).json(todos[todoIndex]);
      break;

    case "DELETE":
      const deleteId: number = Number.parseInt(req.query.id as string);
      const filteredTodos: Todo[] = todos.filter(
        (todo) => todo.id !== deleteId
      );
      cache.put("todos", filteredTodos);
      cache.res.status(200).json({ message: "Todo deleted" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
