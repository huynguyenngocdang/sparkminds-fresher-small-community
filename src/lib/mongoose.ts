import { log } from "console";
import mongoose from "mongoose";
//singleton connection;
let isConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URI is missing");
  }

  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "sparkademy",
    });
    isConnected = true;
    console.log("Using new database connection");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
