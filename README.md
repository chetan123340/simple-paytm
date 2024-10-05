# MERN Stack Transaction App

This project is a simple transaction app built using the **MERN** stack (MongoDB, Express, React, Node.js). It allows users to sign up, receive an account initialized with a random amount of money, filter users, and send money to other users. The app also features JWT-based authentication, user profiles with dynamic icons and names, and basic account management.

## Features

- **User Registration & Login**: Sign up and create an account. Users are authenticated using JWT, with tokens stored in local storage.
- **Account Initialization**: Upon registration, each user is assigned a random amount of money to their account.
- **Dashboard**: A dashboard with a search bar where users can filter other users by name or other criteria to send money.
- **Send Money**: Users can send money to other registered users, with real-time updates to their account balance.
- **User Profiles**: Profile icons and names dynamically change based on user actions and details.
- **Authentication**: Secure authentication using **JWT** and **localStorage** for session management.
- **Routing**: Seamless navigation using **React Router DOM**.
- **Data Fetching**: Utilizes **Axios** for fetching user and transaction data from the server.
- **Logout Functionality**: Users can securely log out, clearing the token from local storage.
- **Styling**: Built using **Tailwind CSS** for modern and responsive design.

## Tech Stack

### Frontend
- **React**: UI library for building the user interface.
- **React Router DOM**: Handles routing within the app.
- **Axios**: HTTP client for sending requests to the backend.
- **JWT**: JSON Web Tokens for authentication and session management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **CSS**: For basic styling.

### Backend
- **Node.js**: Runtime environment for building the backend.
- **Express**: Web framework for handling requests and routing.
- **MongoDB**: Database for storing users, accounts, and transactions.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For handling user authentication.

## Project Setup

### Prerequisites
- **Node.js** and **npm** installed.
- **MongoDB** installed and running locally or hosted via a cloud provider (e.g., MongoDB Atlas).
- **Postman** (optional) for testing API endpoints.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chetan123340/simple-paytm.git
   cd simple-paytm
   ```

2. **Install server dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd frontend
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the `server` directory with the following values:
   ```bash
    dbUser
    dbPass
    ID
    JWT_SECRET 
   ```

5. **Run the app**:

   **Backend**:
   ```bash
   cd backend
   node index.js
   ```

   **Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

6. **Visit the app**:
   Open `http://localhost:5173` to see the app in action.

## API Endpoints

### User Routes
- `POST /api/v1/user/signup` - Register a new user.
- `POST /api/v1/user/signin` - Log in a user.
- `PUT /api/v1/user` - Update user details.
- `POST /api/v1/user/bulk` - Gets all user(optional filter query parameter).
- `GET /api/v1/users/me` - Get user details (JWT token required).

### Transaction Routes
- `GET /api/v1/account/balance` - Get balance of a user.
- `POST /api/v1/account/transfer` - Does the transaction.