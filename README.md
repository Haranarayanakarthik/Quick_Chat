# Quick_Chat

A real-time chat application that enables users to communicate instantly through a clean and responsive interface. Built with modern web technologies, this project focuses on performance, scalability, and a smooth user experience.

🚀 Features
🔐 User Authentication (Login / Signup)
💬 Real-time messaging
🟢 Online/offline user status
📡 Instant message updates
📱 Responsive UI (works on desktop & mobile)
🗂️ Chat history storage
👥 One-to-one conversations
🛠️ Tech Stack

Frontend:

React.js
HTML5, CSS3
JavaScript (ES6+)

Backend:

Node.js
Express.js

Database:

MongoDB

Real-Time Communication:

Socket.IO
📂 Project Structure
chat-app/
│
├── client/         # Frontend (React)
├── server/         # Backend (Node + Express)
├── models/         # Database schemas
├── routes/         # API routes
├── controllers/    # Logic handling
├── socket/         # WebSocket logic
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone
cd chat-app
2️⃣ Install dependencies

Frontend

cd client
npm install

Backend

cd server
npm install
3️⃣ Setup Environment Variables

Create a .env file in the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
4️⃣ Run the application

Start backend

cd server
npm start

Start frontend

cd client
npm start
🌐 Usage
Register a new account or log in
Start chatting with other users in real time
Messages update instantly without refreshing

🎯 Future Improvements
🧑‍🤝‍🧑 Group chats
🔔 Push notifications
🌙 Dark mode
