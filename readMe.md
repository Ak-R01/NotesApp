# 📝 MERN Notes App

A full-stack **Notes App** built using the **MERN stack (MongoDB, Express, React, Node.js)**. It allows users to create, update, and delete notes with a clean, styled interface.

---

## 🚀 Features

-   Add new notes with title and content
-   Edit existing notes
-   Delete notes
-   Responsive UI with custom styling
-   RESTful API integration with MongoDB

---

## 🖼️ Demo Screenshot

![Notes App Screenshot](./screenshot.png) <!-- Optional: Add a real screenshot if available -->

---

## 🛠️ Tech Stack

| Layer       | Technology               |
| ----------- | ------------------------ |
| Frontend    | React.js                 |
| Backend     | Node.js + Express        |
| Database    | MongoDB (Atlas or local) |
| Styling     | CSS                      |
| HTTP Client | Axios                    |

---

---

## 🧑‍💻 Getting Started

### ⚙️ Prerequisites

-   Node.js and npm
-   MongoDB Atlas or local MongoDB

---

### 🔌 Backend Setup

```bash
cd backend
npm install
```

Create a .env file in the backend folder:

MONGO_URL=your_mongodb_connection_string

Start the backend server:

node server.js

Server will run on http://localhost:5000.

🎨 Frontend Setup

```bash
cd frontend
npm install
npm start
```

React app runs on http://localhost:3000.

🔗 API Endpoints
Method Endpoint Description
GET /api/notes Get all notes
POST /api/notes Add a new note
PUT /api/notes/:id Update a note
DELETE /api/notes/:id Delete a note
