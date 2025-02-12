import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import showRoutes from './routes/show.route.js';

// Allows you to access your env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to use json in our req.body -- Middleware

app.use('/api/shows', showRoutes) //going to use this now instead of including it in all of the routes in show.route.js
// Server.js hits show.route.js then hits show.conrtroller.js to house all of the functionality in one place

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});