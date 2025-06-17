import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TodoList } from "./TodoList";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("TodoList Component", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  describe("Adding Todos", () => {
    it("should add a todo when form is submitted with valid text", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByPlaceholderText(/add a new todo/i);
      const addButton = screen.getByRole("button", { name: /add todo/i });

      await user.type(input, "Test todo item");
      await user.click(addButton);

      expect(screen.getByText("Test todo item")).toBeInTheDocument();
      expect(screen.getByText(/1 active todo/i)).toBeInTheDocument();
    });

    it("should show validation error for short todo text", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByPlaceholderText(/add a new todo/i);
      const addButton = screen.getByRole("button", { name: /add todo/i });

      await user.type(input, "hi");
      await user.click(addButton);

      // Should show validation error (implement this in component)
      expect(screen.getByText(/minimum 3 characters/i)).toBeInTheDocument();
      expect(screen.queryByText("hi")).not.toBeInTheDocument();
    });

    it("should clear input after adding todo", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByPlaceholderText(
        /add a new todo/i
      ) as HTMLInputElement;

      await user.type(input, "Test todo");
      await user.click(screen.getByRole("button", { name: /add todo/i }));

      expect(input.value).toBe("");
    });
  });

  describe("Todo Interactions", () => {
    it("should toggle todo completion status", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      // Add a todo first
      const input = screen.getByPlaceholderText(/add a new todo/i);
      await user.type(input, "Test todo");
      await user.click(screen.getByRole("button", { name: /add todo/i }));

      // Toggle completion
      const checkbox = screen.getByRole("checkbox");
      await user.click(checkbox);

      expect(checkbox).toBeChecked();
      expect(screen.getByText(/0 active todos/i)).toBeInTheDocument();
    });

    it("should delete todo when delete button is clicked", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      // Add a todo first
      const input = screen.getByPlaceholderText(/add a new todo/i);
      await user.type(input, "Test todo to delete");
      await user.click(screen.getByRole("button", { name: /add todo/i }));

      // Delete the todo
      const deleteButton = screen.getByRole("button", { name: /delete/i });
      await user.click(deleteButton);

      expect(screen.queryByText("Test todo to delete")).not.toBeInTheDocument();
      expect(screen.getByText(/no todos yet/i)).toBeInTheDocument();
    });
  });

  describe("Filtering", () => {
    beforeEach(async () => {
      // Helper to set up todos for filtering tests
      const user = userEvent.setup();
      render(<TodoList />);

      // Add completed todo
      const input = screen.getByPlaceholderText(/add a new todo/i);
      await user.type(input, "Completed todo");
      await user.click(screen.getByRole("button", { name: /add todo/i }));
      await user.click(screen.getByRole("checkbox"));

      // Add active todo
      await user.type(input, "Active todo");
      await user.click(screen.getByRole("button", { name: /add todo/i }));
    });

    it("should show all todos by default", () => {
      expect(screen.getByText("Completed todo")).toBeInTheDocument();
      expect(screen.getByText("Active todo")).toBeInTheDocument();
    });

    it("should filter active todos", async () => {
      const user = userEvent.setup();

      await user.click(screen.getByRole("button", { name: /active/i }));

      expect(screen.queryByText("Completed todo")).not.toBeInTheDocument();
      expect(screen.getByText("Active todo")).toBeInTheDocument();
    });

    it("should filter completed todos", async () => {
      const user = userEvent.setup();

      await user.click(screen.getByRole("button", { name: /completed/i }));

      expect(screen.getByText("Completed todo")).toBeInTheDocument();
      expect(screen.queryByText("Active todo")).not.toBeInTheDocument();
    });
  });

  describe("Persistence", () => {
    it("should save todos to localStorage", async () => {
      expect.hasAssertions(); // Ensure at least one assertion is made
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByPlaceholderText(/add a new todo/i);
      await user.type(input, "Persistent todo");
      await user.click(screen.getByRole("button", { name: /add todo/i }));

      // Check if localStorage was called (implement this in component)
      // expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    it("should load todos from localStorage on mount", () => {
      // Pre-populate localStorage
      expect.hasAssertions(); // Ensure at least one assertion is made

      const mockTodos = JSON.stringify([
        {
          id: "1",
          text: "Saved todo",
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
      localStorageMock.setItem("todos", mockTodos);

      render(<TodoList />);

      // Should load the saved todo (implement this in component)
      // expect(screen.getByText('Saved todo')).toBeInTheDocument();
    });
  });

  describe("Accessibility???", () => {
    expect.hasAssertions(); // Ensure at least one assertion is made

    // it("should have proper ARIA labels and roles", () => {
    //   render(<TodoList />);
    //   expect(screen.getByRole("textbox")).toBeInTheDocument();
    //   expect(
    //     screen.getByRole("button", { name: /add todo/i })
    //   ).toBeInTheDocument();
    //   expect(screen.getAllByRole("button")).toHaveLength(4); // Add + 3 filter buttons
    // });
  });
});

// Additional test utilities that candidates might find helpful
export const createMockTodo = (overrides: Partial<any> = {}) => ({
  id: "1",
  text: "Test todo",
  completed: false,
  createdAt: new Date(),
  ...overrides,
});

export const renderTodoListWithTodos = (todos: any[]) => {
  // Helper function to render TodoList with pre-existing todos
  // Implement this to help with testing scenarios
};
