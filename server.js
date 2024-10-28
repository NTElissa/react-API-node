// server.js
import 'dotenv/config';  
import express from "express";
import connectDB from "./database.js"; 

const app = express();
const PORT = process.env.PORT ;

connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
