# Quick Chat

A real-time chat application built with modern web technologies.

## 🚀 Technologies Used

### Backend
- Node.js with Express
- TypeScript
- Prisma (Database ORM)
- Redis for caching
- Socket.IO for real-time communication
- JWT for authentication

### Frontend
- React 19
- Vite
- TypeScript
- Chakra UI for styling
- React Router for navigation
- Axios for API requests
- Framer Motion for animations

## 📦 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (Latest LTS version)
- Redis server running on localhost:6379
- PostgreSQL (required for Prisma)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd quick_chat
```

2. Install dependencies for both server and client:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up your environment variables:
Create a `.env` file in the server directory with the following variables:
```
DATABASE_URL="your-database-url"
JWT_SECRET="your-jwt-secret"
```

## 🚀 Running the Application

### Development Mode

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the client:
```bash
cd client
npm run dev
```

The client will be available at `http://localhost:5173` and the server at `http://localhost:3000`.

### Production Mode

1. Build and start the server:
```bash
cd server
npm run build
npm start
```

2. Build and serve the client:
```bash
cd client
npm run build
npm run preview
```

## 🌟 Features

- Real-time chat functionality
- User authentication
- Modern and responsive UI
- Message caching with Redis
- TypeScript for type safety
- Scalable architecture

## 📝 License

This project is licensed under the ISC License.

## 👥 Contributing

Contributions, issues, and feature requests are welcome! 