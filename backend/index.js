import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/connectDB.js';

dotenv.config();

const app = express();

// Middleware
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) =>{
    res.send("Hello from backend!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



