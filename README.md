# E-Commerce Platform (Yshop Store)

> A full-featured e-commerce platform built with the MERN stack and Redux Toolkit.

![E-Commerce Screenshot](path-to-your-screenshot.png)

This project is part of my journey in building a modern e-commerce application. It includes both frontend and backend components, utilizing the latest technologies for a seamless shopping experience.

---

## Features

- **Frontend (React + Vite + Redux Toolkit):**

  - User authentication (JWT)
  - Product catalog with search and pagination
  - Shopping cart and checkout process
  - Order history and user profile management

- **Backend (Node.js + Express + MongoDB):**

  - RESTful API with JWT authentication
  - Admin dashboard for product and user management
  - Order processing and status updates
  - File upload handling for product images

- **Dev Tools & Utilities:**

  - ESLint & Prettier for code quality
  - Environment variable management with `.env`
  - GitHub Actions for CI/CD workflows

---

## Demo

You can view a live demo of the application here: [https://your-demo-url.com](https://your-demo-url.com)

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Yashraj1994/e-commerce.git
cd e-commerce
```

### Set up environment variables

Create a `.env` file in the root directory and add the following:

```
NODE_ENV=development
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PAYPAL_CLIENT_ID=your-paypal-client-id
```

### Install dependencies

For the backend:

```bash
npm install
```

For the frontend:

```bash
cd frontend/vite-project
npm install
```

### Run the application

To run both frontend and backend concurrently:

```bash
npm run dev
```

Or to run them separately:

- Backend: `npm run server`
- Frontend: `npm run client`
- Concurrently: `npm run dev`

---

## Usage

- **Backend:** The server runs on `http://localhost:5000`.
- **Frontend:** The client runs on `http://localhost:5173` (Vite default).

Ensure MongoDB is running and accessible via the URI provided in your `.env` file.

---

## Technologies Used

- **Frontend:** React, Vite, Redux Toolkit, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Dev Tools:** ESLint, Prettier, GitHub Actions

---
