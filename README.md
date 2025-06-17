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

**File**: `src/components/TodoList/TodoList.tsx`

Create a todo list component with the following requirements:
- Add new todos with validation (minimum 3 characters)
- Ability to mark todos as complete/incomplete
- Delete todos
- Filter todos (All, Active, Completed)
- Sort by creation date
- Display todo count
- Persist state to localStorage
- Use TypeScript for type safety


## Part 2: Next.js Routing & Data Fetching ✅

**Files**: 
- `src/pages/posts/index.tsx`

Create a blog-style interface with the following requirements:
- Posts listing page displaying all posts from /api/posts
- Individual post page with dynamic routing
- Server-side rendering for SEO
- Use TypeScript for type safety