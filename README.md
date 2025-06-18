# Overview

The application is a basic TODO app written in NextJS (Typescript) using the pages router. There are several key files that you will work in:

- src/pages/index.tsx - The application UI code
- src/pages/api/todos.ts - The application API code
- src/styles/globals.css - The CSS styling
- src/types/index.ts - Types for the UI and API

The API uses an in-memory cache to simulate a database. The package it is using is called [memory-cache](https://www.npmjs.com/package/memory-cache).

# Setup

- Install dependancies
- Run application
- Open application in the browser

# Tasks (30 minutes)

- Add the description to the TodoItem. It should be stlyed and crossed out when the item is marked as completed (Get off mark, ability to read existing code and typescript errors)

- When the 'Hide Completed' checkbox is checked, all completed tasks should not be visible (General react patterns and js filtering)

- The items should be sorted by the selected key in the sort select box, date in descending order, title in ascending order (Same again but js sorting)

- Get delete button working with application (API REST understanding and bit of above)

- Create a page for an individual TODO

# Questions (15 minutes)

- Talk me through how you would go about any uncompleted tasks?

- If you had more time, what would you change about the application and what you do differently?

- How would you optimise for first page load?

- Talk me through what your testing strategy would be for the application?
