import React, { useState, useEffect, useCallback } from "react";
import styles from "./TodoList.module.css";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

/**
 * TodoList Component
 * Requirements:
 * - Add new todos with validation (minimum 3 characters)
 * - Mark todos as complete/incomplete
 * - Delete todos
 * - Filter todos (All, Active, Completed)
 * - Sort by creation date
 * - Display todo count
 * - Persist state to localStorage
 * - Undo/Redo functionality?? Possibly talk through this with the interviewer
 * - Use TypeScript for type safety
 */
export const TodoList: React.FC = () => {
  return <h1>Todo List</h1>;
};

export default TodoList;
