import { Router } from "express";
import { create, joinRoom } from "./room.controller";

const router = Router();

//router.get("/", me);
//router.get("/:id", me);
router.post("/", create);
router.put("/join/:id", joinRoom);
//router.delete("/:id", me);

export default router;
