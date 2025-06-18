import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Todo, TodoItemProps, SortOption, SortChangeEvent } from "../types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<SortOption>("date");
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);

  useEffect(() => {
    getTodos();
  }, [sortBy]);

  // API requests
  const getTodos = async () => {
    try {
      console.log("Fetching TODOs");
      const response = await fetch("/api/todos");
      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const putTodo = async (todo: Todo) => {
    try {
      const response = await fetch("/api/todos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      const data: Todo = await response.json();
      setTodos((prev) => {
        const filtered = prev.filter((item) => item.id !== todo.id);
        filtered.push(data);
        return filtered;
      });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`/api/todos?id=${id}`, {
        method: "DELETE",
      });
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {}
  };

  const handleSortChange = (e: SortChangeEvent): void => {
    setSortBy(e.target.value as SortOption);
  };

  if (loading) {
    return <div className={styles.loading}>Loading todos...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Todo App</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.controls}>
          <label htmlFor="sort" className={styles.sortLabel}>
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className={styles.sortSelect}
          >
            <option value="date">Date</option>
            <option value="title">Title</option>
          </select>

          <label htmlFor="hideCompleted" className={styles.filterLabel}>
            Hide Completed
          </label>
          <input
            type="checkbox"
            id="hideCompleted"
            checked={hideCompleted}
            onChange={(e) => setHideCompleted(e.target.checked)}
            className={styles.checkbox}
          />
        </div>

        <div className={styles.todoList}>
          {todos.length === 0 ? (
            <p className={styles.emptyState}>No todos found</p>
          ) : (
            todos
              .filter((todo) => (hideCompleted ? !todo.completed : true))
              .sort((a, b) => {
                const conditionA = sortBy === "date" ? -1 : 1;
                const conditionB = sortBy === "date" ? 1 : -1;
                return a[sortBy] > b[sortBy] ? conditionA : conditionB;
              })
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  putTodo={putTodo}
                  deleteTodo={deleteTodo}
                />
              ))
          )}
        </div>
      </main>
    </div>
  );
}

const TodoItem = ({ todo, putTodo, deleteTodo }: TodoItemProps) => {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onChange={(e) => putTodo({ ...todo, completed: e.target.checked })}
        className={styles.checkbox}
      />
      <label htmlFor={`todo-${todo.id}`} className={styles.checkboxLabel}>
        <h3
          className={`${styles.todoTitle} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {todo.title}
        </h3>
      </label>
      <span className={styles.todoDate}>{todo.date}</span>
      <button
        className={styles.deleteButton}
        aria-label={`Delete ${todo.title}`}
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
      <div
        className={`${styles.todoDescription} ${
          todo.completed ? styles.completed : ""
        }`}
      >
        {todo.description}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}
