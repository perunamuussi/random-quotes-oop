# 🎉 Random Quotes App with API

Welcome to the **Random Quotes App**!  
This project consists of:

- **Client**: Vanilla JavaScript frontend
- **Server**: Node.js Express backend serving a random quotes API

---

## 📂 Project Structure

random-quotes-app/  
├── client/ → Frontend (Vanilla JS)  
└── server/ → Backend (Express API)

---

## 🚀 Running the App

### 🛠 Development Mode

1. **Install server dependencies**  
   Run this command from the root:  
   `npm install --prefix server`

2. **Start the server with auto-restart (Nodemon)**  
   From the root:  
   `npm run dev --prefix server`

3. **Start the client with live reload**  
   From the root:  
   `npx live-server client`

📌 Tip: Use two terminal windows — one for the server and one for the client.

---

### ⚙️ Production Mode

1. **Start the server**  
   `npm start --prefix server`

2. **Serve the client files**  
   Either open `client/index.html` manually in your browser  
   or use:  
   `npx live-server client`

---

## 📌 Notes

- Make sure you have Node.js installed.
- `live-server` is used via `npx` (no global install required).
- Only the server has dependencies, so install them using:  
  `npm install --prefix server`

---
