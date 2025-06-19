import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Todo, TodoItemProps, SortOption, SortChangeEvent } from "../types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<SortOption>("date");

  useEffect(() => {
    getTodos();
  }, []);

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
      getTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
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
            className={styles.checkbox}
          />
        </div>

        <div className={styles.todoList}>
          {todos.length === 0 ? (
            <p className={styles.emptyState}>No todos found</p>
          ) : (
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} putTodo={putTodo} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

const TodoItem = ({ todo, putTodo }: TodoItemProps) => {
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
      >
        Delete
      </button>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}
