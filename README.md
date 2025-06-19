# Overview

The application is a basic TODO app written in NextJS (Typescript) using the pages router. There are several key files that you will work in:

- src/pages/index.tsx - The application UI code
- src/pages/api/todos.ts - The application API code
- src/styles/Home.Module.css - The CSS styling
- src/types/index.ts - Types for the UI and API

Note: You will NOT be required to work in the db directory

The API uses an in-memory RDS database and Drizzle ORM. Documentation for Drizzle ORM queries is here: https://orm.drizzle.team/docs/rqb.

- It is not a requirement to complete every task, we are more interested in how you communicate and go about solving problems
- You may use any tools you like to complete the tasks - AI, Google etc. - we only ask that AI doesn't generate code for you
- Please turn off any AI assisted code completion tools
- If you are stuck or don't know something, we are happy to point you in the right direction

# Setup

- Install dependancies
- Run application
- Open application in the browser

# Tasks (30 minutes)

- Add the description to the TodoItem UI item. It should be styled and crossed out when the item is marked as completed (Get off mark, ability to read existing code and typescript errors)

- When the 'Hide Completed' checkbox is checked, all completed tasks should not be visible (General react patterns and js filtering)

- The items should be sorted by the selected key in the sort select box, date in descending order, title in ascending order (Same again but js sorting)

- The delete button should remove the todo item from the list and delete it using the API (API REST understanding and bit of above)

- Create a page for an individual TODO. You can get an individual todo from the api by passing an `id` query parameter to the GET endpoint

# Questions (15 minutes)

- Talk me through how you would go about any uncompleted tasks?

- If you had more time, what would you change about the application and what you do differently?

- How would you optimise for first page load?

- Talk me through what your testing strategy would be for the application?
