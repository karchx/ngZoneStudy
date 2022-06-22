import { Router } from "express";
import { me } from "./room.controller";

const router = Router();

router.get("/", me);
router.get("/:id", me);
router.post("/", me);
router.put("/:id", me);
router.delete("/:id", me);

export default router;
