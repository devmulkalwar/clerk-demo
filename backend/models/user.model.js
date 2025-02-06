import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
    },
    fullName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    address: {
      type: String,
    },
    bio: {
      type: String,
      maxlength: 300,
    },
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
    },
    preferences: {
      darkMode: { type: Boolean, default: false },
      language: { type: String, default: "en" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
