💳 VatoBank Frontend

🌐 Overview

VatoBank is a modern e-banking web application that provides users with a secure and intuitive interface to manage their finances online.
This frontend—built with React—connects to the Laravel REST API backend to deliver real-time account data, transaction updates, and a smooth user experience across devices.

The application was developed as part of a Capstone Project showcasing full-stack proficiency in modern web technologies and best practices for secure, scalable financial applications.

🚀 Features

🔐 User Authentication: Secure login with JWT-based authentication and multi-factor verification.
💰 Account Dashboard: Displays real-time account balance, transaction history, and spending summary.
🔄 Fund Transfers: Send money between accounts instantly.
💳 Deposits & Withdrawals: Manage cash flow directly from your dashboard.
🧾 Transaction Persistence: All user activity is stored and retrieved via the backend API.
⚙️ State Management: Built with Redux Toolkit for predictable, global state handling.
📱 Responsive Design: Fully optimized for desktop and mobile banking experiences.
🧩 Modular Architecture: Organized by features and components for maintainability.

🏗️ Tech Stack

Frontend:
React.js
Redux Toolkit
React Router DOM
Axios (for API communication)
Tailwind CSS / Custom CSS modules
Framer Motion (for smooth UI transitions)

Backend (API):
Laravel REST API 
MySQL / PostgreSQL database (via Aiven)


📁 Project Structure

VATOBANK_FRONTEND/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.jpg
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── vatologo3.png
│
├── src/
│   ├── Assets/
│   ├── api/            # Axios instance and API utilities
│   ├── app/            # Redux store configuration
│   ├── components/     # Reusable UI components
│   ├── features/       # State slices and logic
│   ├── helper/register # Form helpers and logic
│   ├── pages/          # Page-level components (Dashboard, Login, Register, etc.)
│   ├── App.js
│   ├── index.js
│   ├── style.js
│   ├── App.css
│   └── index.css
│
├── .env
├── .gitignore
└── README.md

🧪 Testing & Development Tools

Postman: API endpoint testing
Redux DevTools: State monitoring
React Developer Tools: Component debugging


🔐 Security

Tokens are stored securely in sessionStorage.
All API requests are sent over HTTPS.
Authentication handled with Bearer tokens via Axios interceptors.



🧑‍💻 Author: Tayo Popoola | Frontend Developer | Full-Stack Engineer

📧 tayopopoola92@gmail.com

💼 www.linkedin.com/in/tayo-p-16a138275

🌐 https://lucent-gnome-a196b3.netlify.app

Backend Repository: [VatoBank API ](https://github.com/tmp-cloud7/vatobank-app-api)(Laravel)


### 🧩 Quick Setup
Clone and run locally:
```bash
git clone https://github.com/tmp-cloud7/VATOBANK_FRONTEND.git
cd VATOBANK_FRONTEND
npm install
npm start

