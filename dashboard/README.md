# 🚀 API Monitor – Distributed API Monitoring & Analytics Platform

A production-style API Monitoring platform built with **Node.js, Express, React, RabbitMQ, MongoDB, PostgreSQL, and Docker** that collects API events asynchronously, processes them in the background, and provides real-time analytics through a modern dashboard.

> Monitor any REST API using API Keys, asynchronous event processing, and a real-time analytics dashboard.

---

## 🌐 Live Demo

### Frontend
https://uptime-api-monitoring.vercel.app

### Backend API
https://uptime-api-monitoring.onrender.com

---

# ✨ Features

- JWT Authentication
- Refresh Token Authentication
- Role Based Access Control
- Super Admin & Client Roles
- API Key Authentication
- Client Management
- API Key Management
- Background Event Processing
- RabbitMQ Message Queue
- MongoDB Raw Event Storage
- PostgreSQL Analytics Database
- Dashboard Analytics
- Endpoint Analytics
- Latency Tracking
- Success/Error Rate Monitoring
- Dockerized Architecture
- Cloud Deployment

---

# 🏗️ System Architecture

```text
                    +-------------------+
                    |   React Frontend  |
                    +---------+---------+
                              |
                              |
                   HTTPS REST API
                              |
                              ▼
                 +----------------------+
                 |  Express API Server  |
                 +----------+-----------+
                            |
      +---------------------+---------------------+
      |                                           |
      ▼                                           ▼
Authentication                           RabbitMQ Queue
                                              |
                                              ▼
                                  Background Processor
                                   (Consumer Service)
                                      /           \
                                     /             \
                                    ▼               ▼
                             MongoDB Atlas     PostgreSQL
                              Raw Events      Aggregated Metrics
                                     \           /
                                      \         /
                                       ▼       ▼
                                  Analytics Dashboard
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Recharts

## Backend

- Node.js
- Express.js
- JWT
- Refresh Tokens
- Mongoose
- Prisma ORM

## Databases

- MongoDB Atlas
- Neon PostgreSQL

## Messaging

- RabbitMQ
- CloudAMQP

## DevOps

- Docker
- Docker Compose
- Render
- Vercel

---

# 📂 Project Structure

```
client/
server/
processor/
docker/
```

---

# 🔐 Authentication

The application supports

- Email Login
- JWT Access Tokens
- Refresh Tokens
- Secure Cookies
- API Keys for Monitoring APIs

---

# 👥 User Roles

### Super Admin

- Create Clients
- Create API Keys
- Manage Client Users
- View Analytics

### Client Admin

- Create API Keys
- Manage Client Users

### Client Viewer

- Read Only Dashboard

---

# 📊 Dashboard Features

- Total API Hits
- Success Rate
- Error Rate
- Average Latency
- Top Endpoints
- Endpoint Analytics
- API Usage Statistics

---

# 📈 Monitoring Flow

```text
External API
      │
      ▼
Client Application
      │
      ▼
POST /api/hit
      │
      ▼
API Gateway
      │
      ▼
RabbitMQ
      │
      ▼
Processor Service
      │
      ├── MongoDB
      └── PostgreSQL
      │
      ▼
Dashboard
```

---

# 🔑 How Monitoring Works

1. Create a Client
2. Generate an API Key
3. Send API hit events to

```
POST /api/hit
```

Example

```json
{
  "serviceName": "GitHub API",
  "endpoint": "/users/octocat",
  "method": "GET",
  "statusCode": 200,
  "latencyMs": 376
}
```

The processor consumes the event from RabbitMQ and updates analytics automatically.

---

# 🚀 Running Locally

## Clone

```bash
git clone https://github.com/yourusername/api-monitor.git
```

---

## Install

```bash
npm install
```

---

## Environment Variables

Create

```
server/.env
```

Configure

```
PORT=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

MONGO_URI=

DATABASE_URL=

RABBITMQ_URL=

REDIS_URL=

SENDGRID_API_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## Start Services

```bash
docker compose up
```

---

## Run Backend

```bash
npm run dev
```

---

## Run Frontend

```bash
cd client
npm run dev
```

---

## Run Processor

```bash
npm run processor
```

---

# 🌍 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend API | Render |
| Processor | Render |
| MongoDB | Atlas |
| PostgreSQL | Neon |
| RabbitMQ | CloudAMQP |

---

# 🔑 Demo Login

Use the following demo credentials to explore the dashboard.

```
Email:
demo@example.com

Password:
********
```

> **Note:** If the application has been idle, Render's free services may take 30–60 seconds to wake up on the first request.

---

# 📸 Screenshots

Add screenshots here.

- Login Page
- Dashboard
- Analytics
- Top Endpoints
- API Key Management

---

# 🔮 Future Improvements

- Live WebSocket updates
- Email Alerts
- Slack Notifications
- Grafana Integration
- Prometheus Metrics
- Rate Limiting Analytics
- Kubernetes Deployment

---

# 📄 License

MIT License

---

# 👨‍💻 Author

**Mansi Sharma**

GitHub: https://github.com/Sam-syntax35

LinkedIn: https://linkedin.com/in/YOUR-LINKEDIN
