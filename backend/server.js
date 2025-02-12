import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


// Allows you to access your env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to use json in our req.body -- Middleware

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});