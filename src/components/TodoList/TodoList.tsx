import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

interface TodoListProps {
  className?: string;
}

/**
 * TodoList Component
 * 
 * Requirements:
 * - Add new todos with validation (minimum 3 characters)
 * - Mark todos as complete/incomplete
 * - Delete todos
 * - Filter todos (All, Active, Completed)
 * - Display todo count
 * - Persist state to localStorage
 * 
 * Bonus:
 * - Edit existing todos
 * - Keyboard shortcuts
 * - Drag and drop reordering
 */
export const TodoList: React.FC<TodoListProps> = ({ className }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [newTodoText, setNewTodoText] = useState('');
  const [error, setError] = useState<string>('');

  // TODO: Implement localStorage persistence
  useEffect(() => {
    // Load todos from localStorage on component mount
  }, []);

  // TODO: Save todos to localStorage when todos change
  useEffect(() => {
    // Save todos to localStorage
  }, [todos]);

  const addTodo = (text: string) => {
    // TODO: Implement validation and todo creation
    // - Validate minimum 3 characters
    // - Create new todo with unique ID
    // - Clear input and error state
  };

  const toggleTodo = (id: string) => {
    // TODO: Toggle completed status of todo
  };

  const deleteTodo = (id: string) => {
    // TODO: Remove todo from list
  };

  const getFilteredTodos = () => {
    // TODO: Filter todos based on current filter
    // - 'all': return all todos
    // - 'active': return uncompleted todos
    // - 'completed': return completed todos
    return todos;
  };

  const getActiveTodoCount = () => {
    // TODO: Return count of uncompleted todos
    return 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  const filteredTodos = getFilteredTodos();
  const activeTodoCount = getActiveTodoCount();

  return (
    <div className={`${styles.todoList} ${className || ''}`}>
      <h1>Todo List</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className={styles.addForm}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo..."
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add Todo
        </button>
        {error && <span className={styles.error}>{error}</span>}
      </form>

      {/* Filter Buttons */}
      <div className={styles.filters}>
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? styles.activeFilter : ''}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? styles.activeFilter : ''}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? styles.activeFilter : ''}
        >
          Completed
        </button>
      </div>

      {/* Todo Count */}
      <div className={styles.todoCount}>
        {activeTodoCount} active todo{activeTodoCount !== 1 ? 's' : ''}
      </div>

      {/* Todo List */}
      <ul className={styles.todos}>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className={styles.checkbox}
            />
            <span className={styles.todoText}>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <div className={styles.emptyState}>
          {filter === 'all' 
            ? 'No todos yet. Add one above!' 
            : `No ${filter} todos.`
          }
        </div>
      )}
    </div>
  );
};

export default TodoList;
