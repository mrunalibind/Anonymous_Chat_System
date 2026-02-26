# 🚀 Anonymous Real-Time Chat Application

A full-stack real-time anonymous chat application built with modern web technologies.  
Users can connect randomly, chat instantly, skip partners, and experience rate-limited secure messaging.

---

## 🌐 Live Demo

Frontend: https://taptalent-frontend-1.onrender.com/ 

Backend: https://taptalent-backend.onrender.com

---

## 🏗️ Architecture

Frontend (React + Vite) → Render (Static Site)  
Backend (Node.js + Express + Socket.io) → Render (Web Service)  
Database (MySQL) → Railway  

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Socket.io Client

### Backend
- Node.js
- Express
- Socket.io
- MySQL2
- CORS
- dotenv

### Database
- MySQL (Railway Hosted)

---

## ⚡ Features

- 🔁 Random user matching
- 💬 Real-time messaging
- ⏭️ Skip partner functionality
- 🔌 Automatic disconnect handling
- 🛡️ Sliding window rate limiting (5 messages / 3 seconds)
- 🗃️ Chat session logging in database
- 📦 Production-ready deployment setup
- 🌍 Environment-based configuration

---

## 🔒 Rate Limiting

Implemented a sliding window rate limiter using in-memory Map.

- Limit: 5 messages
- Time Window: 3 seconds
- Prevents spam and abuse
- Cleans up on disconnect

---

## 🗄️ Database Schema

### chat_sessions

| Column | Type |
|--------|------|
| id | VARCHAR(36) |
| user1_socket_id | VARCHAR(50) |
| user2_socket_id | VARCHAR(50) |
| started_at | TIMESTAMP |
| ended_at | TIMESTAMP |

### messages

| Column | Type |
|--------|------|
| id | INT (Auto Increment) |
| session_id | VARCHAR(36) |
| sender_socket_id | VARCHAR(50) |
| message | TEXT |
| created_at | TIMESTAMP |

---

## 🚀 Local Development Setup

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd project-folder
```

### 2️⃣ Install Dependencies in backend folder

```bash
npm install
```

### 3️⃣ Create a .env file inside the backend folder

.env
```
PORT=5000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=3306
```

### 4️⃣ Run the backend server

```
npm run dev
```

### 5️⃣ Install Dependencies in frontend folder

```bash
npm install
```

### 6️⃣ Run the frontend

```bash
npm run dev
```
