# React/Next.js Interview Tasks

This project contains a collection of tasks designed for mid-level React/Next.js engineer interviews. Each task is designed to test different aspects of React/Next.js development and can be completed in 30-60 minutes during a pairing session.

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

## Interview Tasks

### Task 1: Component Development & State Management (30-45 min)
**File**: `src/components/TodoList/TodoList.tsx`

Create a todo list component with the following requirements:
- Add new todos with validation (minimum 3 characters)
- Mark todos as complete/incomplete
- Delete todos
- Filter todos (All, Active, Completed)
- Display todo count
- Persist state to localStorage
- Unit tests for core functionality

**Skills Tested**: 
- React hooks
- Form handling and validation
- Local storage integration
- Component composition
- Testing with React Testing Library

### Task 2: API Integration & Error Handling (30-45 min)
**File**: `src/components/UserProfile/UserProfile.tsx`

Build a user profile component that:
- Fetches user data from JSONPlaceholder API
- Displays loading states
- Handles and displays errors gracefully
- Allows editing user information
- Optimistic updates with rollback on failure
- Debounced search functionality

**Skills Tested**:
- API integration patterns
- Loading and error states
- Optimistic updates
- Debouncing
- Error boundary usage

### Task 3: Next.js Routing & Data Fetching (45-60 min)
**Files**: 
- `src/pages/posts/[id].tsx`
- `src/pages/posts/index.tsx`

Create a blog-style interface:
- Posts listing page with pagination
- Individual post page with dynamic routing
- Server-side rendering for SEO
- Static generation for performance
- Breadcrumb navigation
- Share functionality

**Skills Tested**:
- Next.js routing (dynamic routes)
- getServerSideProps / getStaticProps
- getStaticPaths for dynamic routes
- SEO optimization
- Performance considerations

### Task 4: Advanced Hooks & Performance (45-60 min)
**File**: `src/components/DataTable/DataTable.tsx`

Build a performant data table with:
- Virtual scrolling for large datasets
- Sortable columns
- Filterable data
- Custom hooks for data manipulation
- Memoization for performance
- Keyboard navigation

**Skills Tested**:
- Custom hooks
- useMemo, useCallback optimization
- Virtual scrolling concepts
- Accessibility (a11y)
- Performance optimization

### Task 5: Form Handling & Validation (30-45 min)
**File**: `src/components/ContactForm/ContactForm.tsx`

Create a multi-step contact form:
- Multiple form steps with navigation
- Field validation with custom rules
- Real-time validation feedback
- Form persistence between steps
- Submit with loading states
- Success/error handling

**Skills Tested**:
- Complex form state management
- Validation patterns
- Multi-step form UX
- Form persistence
- Custom validation rules

### Task 6: Context & Global State (30-45 min)
**Files**:
- `src/context/ThemeContext.tsx`
- `src/components/ThemeProvider/ThemeProvider.tsx`

Implement a theme system:
- Light/dark theme toggle
- Theme persistence
- Context for global state
- CSS-in-JS or CSS variables
- Smooth transitions
- System preference detection

**Skills Tested**:
- React Context API
- Global state management
- CSS theming strategies
- Browser API integration
- Performance considerations with context

## Bonus Challenges

### Accessibility Audit
Review and improve accessibility across components:
- Screen reader compatibility
- Keyboard navigation
- ARIA labels and roles
- Color contrast compliance
- Focus management

### Performance Optimization
Optimize the application for performance:
- Bundle analysis and code splitting
- Image optimization
- Lazy loading implementation
- Caching strategies
- Core Web Vitals improvements

### Testing Strategy
Expand test coverage:
- Integration tests
- E2E test scenarios
- Custom testing utilities
- Mock strategies
- Test data factories

## Evaluation Criteria

### Technical Skills (40%)
- Code organization and structure
- React/Next.js best practices
- TypeScript usage
- Testing approach
- Performance considerations

### Problem Solving (30%)
- Approach to breaking down requirements
- Handling edge cases
- Error handling strategies
- Code reusability

### Code Quality (20%)
- Readability and maintainability
- Consistent naming conventions
- Proper component composition
- Documentation and comments

### Communication (10%)
- Explaining thought process
- Asking clarifying questions
- Discussing trade-offs
- Collaborative approach

## Getting Started with Tasks

Each task has a corresponding test file and starter component. Candidates can choose tasks based on:
- Available time (30-60 minutes)
- Specific skills to demonstrate
- Areas of expertise or interest

The scaffolding provides:
- Basic component structure
- Test file setup
- TypeScript interfaces
- Styling foundation

## Additional Resources

- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Testing Library](https://testing-library.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
