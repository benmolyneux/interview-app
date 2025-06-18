# React/Next.js Interview Tasks

This project contains a collection of tasks designed for mid-level software engineer interviews. Each task is designed to test different aspects of React/Next.js. Typescript is included and should be utilised. 

## Setup

```bash
npm install
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Part 1: TodoList Component (Component Development & State Management) ✅

**API endpoints available at /api/todos.ts**

Create a todo list component with the following requirements:
- Ability to add new todos via endpoint
- Ability to update existing todos via endpoint
- Ability to delete todos via endpoint 
- Be able sort todos list 
- Be able to filter todos by status (All, Active, Completed)
- Use TypeScript for type safety


## Part 2: Next.js Routing & Data Fetching ✅

Create a blog-style interface with the following requirements:
- Individual todo page with dynamic routing
- Server-side rendering for SEO
- Use TypeScript for type safety