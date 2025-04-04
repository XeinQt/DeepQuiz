const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "deepquiz",
});

app.use(cors());
app.use(express.json());

// Register route
app.post("/register", async (req, res) => {
  try {
    const { username, fullname, password } = req.body;

    if (!username || !fullname || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [existingUser] = await pool.query(
      "SELECT username FROM user WHERE username = ?",
      [username]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    await pool.query(
      "INSERT INTO user (username, fullname, password) VALUES (?, ?, ?)",
      [username, fullname, password]
    );

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("❌ Registration error:", error.message);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const [result] = await pool.query(
      "SELECT * FROM user WHERE username = ? AND password = ?",
      [username, password]
    );

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("❌ Login error:", error.message);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
