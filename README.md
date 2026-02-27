## 🌐 Live Demo

- Frontend Application: https://cipher-sql-studio-6f2j.onrender.com
- Backend API: https://cipher-sql-studio-backend.onrender.com

The frontend communicates with the backend REST API for executing SQL queries and fetching assignments.

## Environment variables

### Backend (.env)

GEMINI_API_KEY=
MONGO_URL=
POSTGRESQL_URL=

### Frontend (.env)

VITE_API_URL=

## Installation & Setup

### 1. Clone the repository

git clone https://github.com/your-username/sql-practice-platform.git

cd sql-practice-platform

### Backend Setup

cd backend
npm install

Create a .env file using .env.example and add your database credentials.

npm start

### Frontend Setup

cd frontend
npm install

Create a .env file using .env.example

npm run dev

## Technology Choices Explanation

## Frontend Technologies

### 1. React.js

React was chosen for building the frontend because:

- Component-based architecture makes the UI modular and reusable.
- Fast rendering using Virtual DOM.
- Easy state management for handling query results.
- Strong ecosystem and community support.

### 3. Axios

Axios was used for API communication because:

- Simplifies HTTP requests.
- Automatically parses JSON responses.
- Better error handling compared to fetch.
- Easy integration with backend APIs.

## Backend Technologies

### 4. Node.js + Express.js

Node.js and Express.js were used together to build the backend REST API for this project.

Node.js was chosen because it allows JavaScript to run on the server side, enabling the use of a single language across the full stack (frontend and backend). Its non-blocking, event-driven architecture makes it efficient for handling multiple API requests.

Express.js was used as a lightweight web framework on top of Node.js to simplify routing, middleware handling, and API development. It provides a clean structure for organizing routes, controllers, and middleware, making the backend scalable and maintainable.

Together, Node.js and Express.js enable:
- Fast API development
- Clean routing structure
- Middleware-based request validation
- Easy integration with PostgreSQL
- Scalable and maintainable backend architecture

### 5. PostgreSQL

PostgreSQL was chosen because:

- Powerful relational database system.
- Supports advanced SQL queries.
- Ideal for SQL practice platform.
- ACID compliance ensures data integrity.

### 6. pg (PostgreSQL Driver)

The pg package was used to connect Node.js with PostgreSQL because:

- Lightweight and efficient.
- Supports connection pooling.
- Secure and widely used in production.

### 7. Security Implementation

To ensure database safety:

- Only SELECT queries are allowed.
- Multiple SQL statements are blocked.
- SQL comments are blocked.
- Destructive operations like DROP, DELETE, INSERT, UPDATE are restricted.
- Recommended use of read-only database user.

### AI Integration: Google Gemini (Hint Generation)

Google Gemini API was integrated to provide intelligent hints for SQL queries.

When a user is unable to solve a query, they can click on the "Get Hint" button. The frontend sends the question details to the backend, which then calls the Gemini API to generate a contextual hint.

Gemini was chosen because:

- It generates contextual and human-like responses.
- It helps users understand query logic instead of just showing answers.
- It enhances learning experience.
- It supports natural language prompt-based interaction.

Implementation Flow:
1. User clicks "Get Hint"
2. Frontend sends assignment details to backend
3. Gemini generates a hint
4. Backend sends hint response to frontend
5. Hint is displayed without revealing the full solution
