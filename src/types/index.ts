import { NextApiRequest, NextApiResponse } from "next";

// Core Todo interface
export interface Todo {
  id: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

// Component Props
export interface TodoItemProps {
  todo: Todo;
  putTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

// Sort options
export type SortOption = "date" | "title";

// API Types
export interface CreateTodoRequest {
  title: string;
  description: string;
  date: string;
}

export interface UpdateTodoRequest extends Partial<Todo> {
  id: number;
}

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
}

// API Handler types
export type TodosApiRequest = NextApiRequest & {
  body: CreateTodoRequest | UpdateTodoRequest;
  query: {
    id?: string;
  };
};

export type TodosApiResponse = NextApiResponse<
  Todo[] | Todo | { message: string }
>;

// Event handlers
export interface SortChangeEvent extends React.ChangeEvent<HTMLSelectElement> {}
