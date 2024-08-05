import dotenv from "dotenv";
import express from "express";

import connectDB from "./db/dbConnect.js";

dotenv.config({ path: "./.env" });

connectDB();
