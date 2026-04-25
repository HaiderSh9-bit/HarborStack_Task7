# HarborStack API ⚓

##  Description

HarborStack API is a simple backend prototype built with Express.js to manage harbor crews and dock shifts.
It provides two in-memory resources — **crews** and **shifts** — each with full CRUD operations.

This project is designed as a learning exercise based on Express fundamentals, routing, middleware, and environment configuration.

---

## ⚙️ Setup & Installation

1. Clone the repository or download the project
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

Or run without nodemon:

```bash
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3000
```

The server will run on the specified port.

---

## 🧱 Project Structure

```
harborstack-api/
├── app.js
├── data.js
├── .env
├── .env.example
├── .gitignore
└── package.json
```

---

## 🌐 API Endpoints

### Crews

* GET all crews

```
GET /api/v1/crews
```

* GET crew by ID

```
GET /api/v1/crews/:id
```

---

### Shifts

* GET all shifts

```
GET /api/v1/shifts
```

* GET shift by ID

```
GET /api/v1/shifts/:id
```

---

## 🔄 CRUD Operations

Both **crews** and **shifts** support:

* GET (all & by id)
* POST (create)
* PUT (update)
* DELETE (remove)

---

## 🆔 ID Generation

IDs are generated dynamically using a timestamp-based approach:

```js
new Date().getTime()
```

You may replace this with incremental IDs or UUIDs if needed.

---

## 🧾 Middleware

A custom request logger middleware logs:

* Timestamp
* HTTP method
* URL path
* Client IP

This helps track incoming requests during development.

---

## ⚠️ Notes

* This project uses **in-memory data only** (no database).
* Data will reset when the server restarts.
* Designed for learning and prototyping purposes.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* dotenv
* nodemon

---
