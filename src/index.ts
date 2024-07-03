import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8081;
const DB_LINK = process.env.MONGODB_CONNECTION_STRING || null;

const bootstrap = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_CONNECTION_STRING)
      .then(() => console.log("Connected DB"));

    app.listen(PORT, () =>
      console.log(`Listening on - http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`Error connecting with DB: ${error}`);
  }
};

bootstrap();
