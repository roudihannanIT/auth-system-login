# 🔐 Full-Stack Authentication System

A robust, production-ready authentication system built with *Next.js 14, **Node.js, **Express, and **MongoDB*.
This project implements modern security:
- standards.
- including JWT (JSON Web Tokens) with HttpOnly cookies.
- password hashing
- protected API routes.

---

## 🚀 Key Features

* *Secure Authentication*: Password hashing using bcryptjs and session management via JWT.
* *Data Integrity*: Strict schema validation with Mongoose and TypeScript interfaces.
* *Security Best Practices*: 
    * HttpOnly Cookies (prevents XSS attacks).
    * CORS configuration for cross-origin security.
    * Environment variable protection.
* *State Management*: Centralized AuthContext for seamless user state across the application.
* *Modern UI*: Fully responsive interface styled with Tailwind CSS.
* *Feedback System*: Interactive UI notifications using react-hot-toast.

---

## 🛠 Tech Stack

### Frontend
- *Framework*: Next.js 14 (App Router)
- *Language*: TypeScript
- *Styling*: Tailwind CSS
- *State/API*: React Context API, Axios

### Backend
- *Runtime*: Node.js
- *Framework*: Express.js
- *Database*: MongoDB & Mongoose
- *Security*: JWT, Bcrypt, Cookie-Parser

---

## 🏗 Project Structure


```
├── back
│   ├── src
│   │   ├── config
│   │   │   └── db.ts
│   │   ├── controllers
│   │   │   └── auth.controller.ts
│   │   ├── middlewares
│   │   │   └── auth.middleware.ts
│   │   ├── models
│   │   │   └── user.model.ts
│   │   ├── routes
│   │   │   └── auth.routes.ts
│   │   ├── utils
│   │   │   └── generateToken.ts
│   │   └── index.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── front
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── src
│   │   ├── app
│   │   │   ├── (auth)
│   │   │   │   ├── login
│   │   │   │   │   └── page.tsx
│   │   │   │   └── register
│   │   │   │       └── page.tsx
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components
│   │   ├── context
│   │   │   └── AuthContext.tsx
│   │   ├── hooks
│   │   └── lib
│   │       └── axios.ts
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## Installation & Setup ⚙️ 

### ​Prerequisites
- ​Node.js (v18+)
- ​MongoDB Atlas account
​
### Getting Started

1. Clone the repository:

> git clone https://github.com/roudihannanIT/auth-system-login.git


2. Backend setup:

> cd back
> npm install
Create .env file with: MONGO_URI, JWT_SECRET, PORT
> npm run dev

3. Frontend setup:

> cd back
> npm install
> npm run dev

## Security Design 🔐
​This project follows the Defense in Depth principle by decoupling the authentication state from the client's local storage, instead utilizing HttpOnly cookies, which significantly mitigates XSS risks and CSRF vulnerabilities.

## Author 👨‍💻
Eng. Roudi Hannan

- Email: [roudihannan7@gmail.com]
- LinkedIn: [Roudi Hannan](https://www.linkedin.com/in/roudi-hannan-6243a5366/)
- GitHub: [@roudihannanIT](https://github.com/roudihannanIT)
- Instagram: [@roudihannan8](https://www.instagram.com/roudihannan8)

Open source 📄
Feel free to use this code for learning or any purpose.

If you found this project helpful, please give it a star on GitHub! ⭐️