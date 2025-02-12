// This makes our code better and more module

import express from 'express';

import { createShow, getShows, updateShow, deleteShow } from '../controllers/show.controller.js';

const router = express.Router();


// Use the get method to the root route
router.get("/", getShows)
router.post("/", createShow);
router.put("/:id", updateShow);
router.delete("/:id", deleteShow);


export default router;