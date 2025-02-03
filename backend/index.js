import { clerkMiddleware } from '@clerk/express'
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(clerkMiddleware())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use('/webhooks', webhookRouter);
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});