# QuickChat

A modern real-time chat application that enables instant communication through secure chat rooms.

## Project Structure

The project is divided into three main parts:

### 1. Frontend (`/front`)
- Built with Next.js 14
- TypeScript for type safety
- Tailwind CSS for styling
- NextAuth.js for authentication
- Modern UI components with shadcn/ui

### 2. Client (`/client`)
- React-based client application
- Chakra UI for component styling
- Real-time communication capabilities

### 3. Server (`/server`)
- Backend API server
- Handles authentication and chat functionality
- Manages real-time message delivery

## Features

- 🚀 Instant chat room creation
- 🔒 Secure conversations with password protection
- 👥 Google authentication
- 💻 Cross-platform compatibility
- 🎨 Modern, responsive UI
- 🔄 Real-time message updates

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/VrajLalwala22/Quickchat.git
cd Quickchat
```

2. Install dependencies for each part:

```bash
# Frontend
cd front
npm install

# Client
cd ../client
npm install

# Server
cd ../server
npm install
```

3. Set up environment variables:
Create `.env` files in respective directories with required configurations.

4. Run the development servers:

```bash
# Frontend
cd front
npm run dev

# Client
cd ../client
npm start

# Server
cd ../server
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 