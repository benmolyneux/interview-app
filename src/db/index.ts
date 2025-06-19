import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { todos } from './schema';

// Create in-memory SQLite database
const client = createClient({
  url: ':memory:',
});

export const db = drizzle(client, { schema: { todos } });

// Initialize database with seed data
let isInitialized = false;

export async function initDatabase() {
  if (isInitialized) return;

  // Create table
  await db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      date TEXT NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT false
    )
  `);

  // Insert seed data
  const seedData = [
    {
      id: 7,
      title: "Write unit tests",
      description: "Create comprehensive test coverage for all components and API endpoints",
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
      description: "Set up CI/CD pipeline and deploy the application to cloud hosting",
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
      description: "Ensure the application works well on mobile and tablet devices",
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
  ];

  for (const todo of seedData) {
    await db.insert(todos).values(todo);
  }

  isInitialized = true;
}