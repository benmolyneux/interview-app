import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Todo, TodoItemProps, SortOption, SortChangeEvent } from "../types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<SortOption>("date");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (): Promise<void> => {
    try {
      const response = await fetch("/api/todos");
      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (e: SortChangeEvent): void => {
    setSortBy(e.target.value as SortOption);
    // TODO: Implement sorting logic - interviewee task
    console.log("Sort by:", e.target.value);
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
          <div className={styles.sortContainer}>
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
              <option value="completed">Status</option>
            </select>
          </div>
        </div>

        <div className={styles.todoList}>
          {todos.length === 0 ? (
            <p className={styles.emptyState}>No todos found</p>
          ) : (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </div>
      </main>
    </div>
  );
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoContent}>
        <div className={styles.todoHeader}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
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
          </div>
          <span className={styles.todoDate}>{todo.date}</span>
        </div>
        <p
          className={`${styles.todoDescription} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {todo.description}
        </p>
      </div>
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
  // TODO: Implement server-side data fetching if needed - interviewee task
  return {
    props: {},
  };
}
