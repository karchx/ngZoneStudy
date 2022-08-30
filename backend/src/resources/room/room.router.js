import { Router } from "express";
import { create } from "./room.controller";

const router = Router();

//router.get("/", me);
//router.get("/:id", me);
router.post("/", create);
//router.put("/:id", me);
//router.delete("/:id", me);

export default router;
