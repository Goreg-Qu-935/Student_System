# Task Grading Hub (`Student_System`)

A backend RESTful API for managing academic tasks, student file submissions, and grading workflows. Built with Node.js, Express.js, TypeScript, Prisma ORM, and MySQL, implementing the CAT Reloaded Node.js Backend track specifications (`task-grading-hub`).

---

## Features

- **Authentication & Role-Based Authorization:** User registration and login with JWT token generation and custom `Auth.Authentication` middleware attaching authenticated user context (`req.user`) to protected routes.
- **Task Management:** Create, retrieve, update, and delete assignments/tasks with request validation middleware and proper HTTP status handling.
- **Student Submissions & Binary File Storage:** Submit deliverables linked to specific students and tasks via a relational `Submission` bridge model, storing uploaded file payloads directly as raw bytes (`Bytes` / `Uint8Array`) in MySQL.
- **Grading & Evaluation Workflow:** Track submission status, review student uploads, and assign grades/feedback.
- **Relational Data Integrity:** Normalized MySQL database schema managed through Prisma ORM with 1-to-many and many-to-many (`Student` ↔ `Submission` ↔ `Task`) foreign key relations.

---

## Tech Stack

- **Runtime & Language:** Node.js, TypeScript
- **Framework:** Express.js
- **Database & ORM:** MySQL, Prisma ORM
- **Authentication:** JSON Web Tokens (`jsonwebtoken`), password hashing (`bcrypt` / `bcryptjs`)
- **Validation & File Handling:** Express validation middleware, Multer / binary buffer handling (`Uint8Array`)
- **API Testing:** Postman

---

## Project Structure

```text
Student_System/
├── prisma/
│   ├── migrations/          # Prisma database migration history
│   └── schema.prisma        # Database models (User/Student, Task, Submission) & relations
├── src/
│   ├── controllers/         # Request handlers for auth, tasks, submissions, and grading
│   ├── middlewares/         # JWT authentication, role checks, and input validation
│   ├── modules/             # Business logic & Prisma data access (e.g., SubmissionModule)
│   ├── routes/              # Express API route definitions
│   ├── utils/               # Helper functions and error handlers
│   └── index.ts             # Application entry point & server initialization
├── package.json
└── tsconfig.json
