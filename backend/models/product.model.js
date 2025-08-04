import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
