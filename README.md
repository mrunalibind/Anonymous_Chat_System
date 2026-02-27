# 🚀 Anonymous Real-Time Chat Application

A full-stack real-time anonymous chat application built with modern web technologies.  
Users can connect randomly, chat instantly, skip partners, and experience rate-limited secure messaging.

---

## 🌐 Live Demo

Frontend: https://taptalent-frontend-1.onrender.com/ 

Backend: https://taptalent-backend.onrender.com 

---

## 🏗️ Project Architecture

Frontend (React + Vite) → Render (Static Site)  
Backend (Node.js + Express + Socket.io) → Render (Web Service)  
Database (MySQL) → Railway 

### Backend
- Node.js + Express server
- Socket.io for real-time communication
- MySQL for session storage
- In-memory structures for:
  - Active chats
  - Waiting queue
  - Active sessions

### Frontend
- React (Vite)
- Component-based structure:
  - `ChatBox`
  - `MessageInput`
  - `StatusBar`
- Socket connection handled in parent component

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
- ⌨️ Typing indicator
- ⏭️ Skip partner functionality
- 🔌 Automatic disconnect handling
- 🛡️ Sliding window rate limiting (5 messages / 3 seconds)
- 🗃️ Chat session logging in database
- 📦 Production-ready deployment setup
- 🌍 Environment-based configuration

---

## 💬 Matchmaking Logic

When a user starts searching:

- If waitingQueue is empty:
  - User is added to queue
- If another user is waiting:
  - Both users are paired
  - A new session ID is generated
  - Session stored in MySQL
  - `activeChats` and `activeSessions` updated
  - Both users receive `matched` event

This ensures FIFO-based random matching.

---

## Messaging Flow

1. User sends message → `send_message`
2. Server checks rate limit
3. Server forwards message to matched partner
4. Partner receives `receive_message`
5. UI updates in real time

---

## Typing Indicator Flow

1. User types → emits `typing`
2. Server forwards to partner
3. Partner sees "Typing..."
4. After inactivity → `stop_typing`
5. Indicator removed

Lightweight events are used to reduce server overhead.

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

---

### 7️⃣ Deployment (Render)

Backend Deployment

- Create new Web Service
- Connect GitHub repository

- Set:

    Build Command: npm install

    Start Command: node src/server.js

- Add environment variables in Render dashboard

Frontend Deployment

- Create new Static Site

- Build Command: npm install && npm run build

- Publish Directory: dist

---

## ⚠️ Known Limitations

1. In-Memory Matchmaking
   - Does not scale across multiple backend instances
   - Horizontal scaling would require Redis or shared state

2. No Message Persistence
   - Messages are not stored
   - Chat history is lost after disconnect

3. No Authentication
   - Fully anonymous
   - No user identity tracking

4. Single Region Deployment
   - Latency may increase for global users

5. Basic Rate Limiting
   - Stored in memory
   - Not distributed-safe
