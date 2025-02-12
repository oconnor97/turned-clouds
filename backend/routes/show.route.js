// This makes our code better and more module

import express from 'express';

import { createShow } from '../controllers/show.controller.js';

const router = express.Router();


// Use the get method to the root route
router.post("/", createShow);


export default router;