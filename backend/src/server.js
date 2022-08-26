import express from "express";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import { connect } from "./utils/db";
import { signup, protect } from "./utils/auth";
import userRouter from "./resources/user/user.router";
import roomRouter from "./resources/room/room.router";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.post("/api/auth/signup", signup);

app.use("/api", protect);

app.use("/api/user", userRouter);
app.use("/api/room", roomRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
