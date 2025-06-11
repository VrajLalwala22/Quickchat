# QuickChat

A modern real-time chat application that allows users to create secure chat rooms instantly and communicate seamlessly.

## Features

- 🚀 Instant chat room creation
- 🔒 Secure conversations
- 👥 User authentication with Google
- 💻 Cross-platform compatibility
- 🎨 Modern, responsive UI

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- NextAuth.js for authentication
- Shadcn UI components

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/quick-chat.git
cd quick-chat/front
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
front/
├── src/
│   ├── app/           # App router pages
│   ├── components/    # Reusable components
│   ├── lib/          # Utility functions
│   └── providers/    # Context providers
├── public/           # Static assets
└── types/           # TypeScript type definitions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
