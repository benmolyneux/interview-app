import cache from "memory-cache";
import { Todo, TodosApiRequest, TodosApiResponse } from "../../types";

export default function handler(req: TodosApiRequest, res: TodosApiResponse) {
  const { method } = req;
  const todos: Todo[] = cache.get("todos") || [];

  switch (method) {
    case "GET":
      const getId = parseInt(req.query.id || "");
      if (req.query.id) {
        const todo = todos.find((todo) => {
          console.log(getId, todo.id);
          return getId == todo.id;
        });
        if (todo) {
          res.status(200).json(todo);
        } else {
          res.status(500).json({ message: "Todo not found" });
        }
      } else {
        res.status(200).json(todos);
      }
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
      const todoIndex: number = todos.findIndex((todo) => todo.id === id);
      if (todoIndex === -1) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      todos[todoIndex] = { ...todos[todoIndex], ...req.body };
      cache.put("todos", todos);
      res.status(200).json(todos[todoIndex]);
      break;

    case "DELETE":
      res.status(200).json({ message: "Todo deleted" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

if (!cache.get("todos")) {
  cache.put("todos", [
    {
      id: 7,
      title: "Write unit tests",
      description:
        "Create comprehensive test coverage for all components and API endpoints",
      date: "2024-01-21",
      completed: true,
    },
    {
      id: 3,
      title: "Create UI components",
      description: "Build the frontend interface for managing todos",
      date: "2024-01-17",
      completed: false,
    },
    {
      id: 10,
      title: "Monitor and analytics",
      description: "Implement logging, error tracking, and user analytics",
      date: "2024-01-24",
      completed: false,
    },
    {
      id: 1,
      title: "Complete project setup",
      description: "Set up the initial project structure and dependencies",
      date: "2024-01-15",
      completed: false,
    },
    {
      id: 5,
      title: "Implement user authentication",
      description: "Add login and registration functionality with JWT tokens",
      date: "2024-01-19",
      completed: false,
    },
    {
      id: 9,
      title: "Deploy to production",
      description:
        "Set up CI/CD pipeline and deploy the application to cloud hosting",
      date: "2024-01-23",
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
      id: 6,
      title: "Add responsive design",
      description:
        "Ensure the application works well on mobile and tablet devices",
      date: "2024-01-20",
      completed: false,
    },
    {
      id: 4,
      title: "Design database schema",
      description: "Plan and implement the database structure for user data",
      date: "2024-01-18",
      completed: true,
    },
    {
      id: 8,
      title: "Optimize performance",
      description: "Improve loading times and implement caching strategies",
      date: "2024-01-22",
      completed: false,
    },
  ] as Todo[]);
}
